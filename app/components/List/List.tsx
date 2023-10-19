import "./styles.scss";

const List = () => {
	return (
		<ul className="company-list">
			<li className="round-corner">
				<article>
					<p className="primary">Nome da Empresa S.A</p>
					<div className="company-info">
						<p className="primary--2">CNPJ: 02.564.000/0001-10</p>
						<span className="primary--1"> - </span>
						<address className="primary--1">Email: empresa@opea.com</address>
					</div>
				</article>
			</li>
		</ul>
	);
};

export default List;
