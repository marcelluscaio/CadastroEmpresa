import "./style.scss";
import Fieldset from "../Fieldset/Fieldset";

const Form = () => {
	const fieldsets = ["Nome", "CNPJ", "E-mail"];

	return (
		<form>
			{fieldsets.map((fieldset) => (
				<Fieldset
					field={fieldset}
					key={fieldset.trim().toLocaleLowerCase()}
				/>
			))}
			<fieldset>
				<button className="delete"></button>
				<button className="button--light primary--3--bold">Cancelar</button>
				<button className="button primary--3--bold">Cadastrar</button>
			</fieldset>
		</form>
	);
};

export default Form;
