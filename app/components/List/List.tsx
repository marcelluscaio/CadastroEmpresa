import "./styles.scss";

type Props = {
	data: any;
	toggleModal: Function;
	formId: string;
	formName: string;
	formCnpj: string;
	formEmail: string;
	setFormId: Function;
	setFormName: Function;
	setFormCnpj: Function;
	setFormEmail: Function;
};

type Item = {
	id: string;
	name: string;
	cnpj: string;
	email: string;
};

const List = ({
	data,
	toggleModal,
	formId,
	formName,
	formCnpj,
	formEmail,
	setFormId,
	setFormName,
	setFormCnpj,
	setFormEmail,
}: Props) => {
	function handleClick(item: Item) {
		setFormId(item.id);
		setFormName(item.name);
		setFormCnpj(item.cnpj);
		setFormEmail(item.email);
		toggleModal((current: boolean) => !current);
	}
	return (
		<ul className="company-list">
			{data.map((item: Item) => (
				<li
					className="round-corner"
					key={item.id}
				>
					<button onClick={(_) => handleClick(item)}>
						<p className="primary">{item.name}</p>
						<div className="company-info">
							<p className="primary--2">CNPJ: {item.cnpj}</p>
							<span className="primary--1"> - </span>
							<address className="primary--1">Email: {item.email}</address>
						</div>
					</button>
				</li>
			))}
		</ul>
	);
};

export default List;
