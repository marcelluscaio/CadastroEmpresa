import "./styles.scss";
import { useState, useEffect } from "react";

type Data = {
	id: string;
	name: string;
	email: string;
	cnpj: string;
};

const List = () => {
	const [data, setData] = useState<Data[]>([]);

	useEffect(() => {
		fetch("https://outros.opea-uat.solutions/prova/front/api/clients")
			.then((result) => result.json())
			.then((result) => setData(result));
	}, []);

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
