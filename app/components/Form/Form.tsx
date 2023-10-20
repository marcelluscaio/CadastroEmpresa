import "./style.scss";
import { useState } from "react";

type Props = {
	closeModal: Function;
	setData: Function;
};

const Form = ({ closeModal, setData }: Props) => {
	const [name, setName] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [email, setEmail] = useState("");

	function handleCancel(e: any) {
		e.preventDefault();
		cleanFields();
		closeModal();
	}

	function cleanFields() {
		setName("");
		setCnpj("");
		setEmail("");
	}

	function submitData(e: any) {
		e.preventDefault();
		if (isComplete()) {
			postData();
			cleanFields();
			closeModal();
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

		const options = {
			method: "POST",
			headers: myHeaders,
			body: data,
			redirect: "follow",
		};

		fetch("https://outros.opea-uat.solutions/prova/front/api/clients", {
			method: "POST",
			headers: myHeaders,
			body: data,
			redirect: "follow",
		})
			.then((response) => response.text())
			.then((result) => console.log(result))
			.then(() => updateData());
	}

	function updateData() {
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
					className="delete"
					onClick={(e) => handleCancel(e)}
				></button>
				<button
					className="button--light primary--3--bold"
					onClick={(e) => handleCancel(e)}
				>
					Cancelar
				</button>
				<button
					className="button primary--3--bold"
					onClick={(e) => submitData(e)}
				>
					Cadastrar
				</button>
			</fieldset>
		</form>
	);
};

export default Form;
