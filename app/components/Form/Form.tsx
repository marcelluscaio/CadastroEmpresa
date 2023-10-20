import "./style.scss";

type Props = {
	closeModal: Function;
	setData: Function;
	id: string;
	name: string;
	cnpj: string;
	email: string;
	setId: Function;
	setName: Function;
	setCnpj: Function;
	setEmail: Function;
};

const Form = ({
	closeModal,
	setData,
	id,
	name,
	cnpj,
	email,
	setId,
	setName,
	setCnpj,
	setEmail,
}: Props) => {
	function handleConfirmUpdate(e: any, id: string) {
		e.preventDefault();
		id === "" ? submitData() : updateData(id);
	}

	function cleanAndClose() {
		cleanFields();
		closeModal();
	}

	function handleCancel(e: any) {
		e.preventDefault();
		cleanAndClose();
	}

	function handleDelete(e: any, id: string) {
		deleteData(id);
		handleCancel(e);
	}

	function cleanFields() {
		setId("");
		setName("");
		setCnpj("");
		setEmail("");
	}

	function submitData() {
		if (isComplete()) {
			postData();
			cleanAndClose();
		}
	}

	function isComplete() {
		const emptyFields = [name, cnpj, email].filter((item) => item.trim() === "");
		return emptyFields.length === 0;
	}

	function postData() {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const data = JSON.stringify({
			name: name,
			email: email,
			cnpj: cnpj,
		});

		fetch("https://outros.opea-uat.solutions/prova/front/api/clients", {
			method: "POST",
			headers: myHeaders,
			body: data,
			redirect: "follow",
		})
			.then((response) => response.text())
			.then((result) => console.log(result))
			.then(() => refresh());
	}

	function deleteData(id: string) {
		fetch(`https://outros.opea-uat.solutions/prova/front/api/clients/${id}`, {
			method: "DELETE",
			redirect: "follow",
		})
			.then((response) => response.text())
			.then((result) => console.log(result))
			.then(() => refresh());
	}

	function updateData(id: string) {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const data = JSON.stringify({
			name: name,
			email: email,
			cnpj: cnpj,
		});

		fetch(`https://outros.opea-uat.solutions/prova/front/api/clients/${id}`, {
			method: "PUT",
			headers: myHeaders,
			body: data,
			redirect: "follow",
		})
			.then((response) => response.text())
			.then((result) => console.log(result))
			.then(() => refresh())
			.then(() => cleanAndClose());
	}

	function refresh() {
		fetch("https://outros.opea-uat.solutions/prova/front/api/clients")
			.then((result) => result.json())
			.then((result) => setData(result));
	}

	return (
		<form>
			<fieldset>
				<label
					className="secondary"
					htmlFor="name"
				>
					Nome
				</label>
				<input
					className="secondary"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</fieldset>
			<fieldset>
				<label
					className="secondary"
					htmlFor="cnpj"
				>
					CNPJ
				</label>
				<input
					className="secondary"
					id="cnpj"
					value={cnpj}
					onChange={(e) => setCnpj(e.target.value)}
				/>
			</fieldset>
			<fieldset>
				<label
					className="secondary"
					htmlFor="email"
				>
					E-mail
				</label>
				<input
					className="secondary"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</fieldset>
			<fieldset className="buttons">
				<button
					type="button"
					disabled={id === ""}
					aria-disabled={id === ""}
					className="delete"
					aria-label="Deletar empresa"
					onClick={(e) => handleDelete(e, id)}
				></button>
				<button
					type="button"
					className="button--light primary--3--bold"
					onClick={(e) => handleCancel(e)}
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="button primary--3--bold"
					onClick={(e) => handleConfirmUpdate(e, id)}
				>
					{id === "" ? "Cadastrar" : "Atualizar"}
				</button>
			</fieldset>
		</form>
	);
};

export default Form;
