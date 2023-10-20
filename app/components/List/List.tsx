import "./styles.scss";

const List = ({ data }) => {
	return (
		<ul className="company-list">
			{data.map((item) => (
				<li
					className="round-corner"
					key={item.id}
				>
					<article>
						<p className="primary">{item.name}</p>
						<div className="company-info">
							<p className="primary--2">CNPJ: {item.cnpj}</p>
							<span className="primary--1"> - </span>
							<address className="primary--1">Email: {item.email}</address>
						</div>
					</article>
				</li>
			))}
		</ul>
	);
};

export default List;
