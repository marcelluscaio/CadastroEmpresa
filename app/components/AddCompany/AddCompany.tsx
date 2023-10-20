import "./style.scss";

type Props = {
	toggleModal: Function;
};

const AddCompany = ({ toggleModal }: Props) => {
	return (
		<>
			<button
				className="
					round-corner 
					primary--3--bold 
					add-company"
				onClick={() => toggleModal((current: boolean) => !current)}
			>
				Adicionar Empresa
			</button>
		</>
	);
};

export default AddCompany;
