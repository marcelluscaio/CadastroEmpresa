import "./style.scss";

type Props = {
	toggleModal: Function;
	setFormId: Function;
	setFormName: Function;
	setFormCnpj: Function;
	setFormEmail: Function;
};

const AddCompany = ({
	toggleModal,
	setFormId,
	setFormName,
	setFormCnpj,
	setFormEmail,
}: Props) => {
	function handleClick() {
		setFormId("");
		setFormName("");
		setFormCnpj("");
		setFormEmail("");
		toggleModal((current: boolean) => !current);
	}

	return (
		<>
			<button
				className="
					round-corner 
					primary--3--bold 
					add-company"
				onClick={handleClick}
			>
				Adicionar Empresa
			</button>
		</>
	);
};

export default AddCompany;
