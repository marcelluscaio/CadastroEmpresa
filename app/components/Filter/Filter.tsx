import { useEffect, useState } from "react";
import "./style.scss";
import { setTimeout } from "timers/promises";

type Props = {
	id: string;
	setData: Function;
};

const url = process.env.NEXT_PUBLIC_URL;

const Filter = ({ id, setData }: Props) => {
	const [inputValue, setInputValue] = useState("");
	const [isEmpty, setIsEmpty] = useState(true);

	function handleChange(input: HTMLInputElement) {
		const newValue = input.value;
		isContentEmpty(newValue);
		setInputValue(newValue);
		searchCompany(newValue);
	}

	function isContentEmpty(content: string) {
		content.trim() === "" ? setIsEmpty(true) : setIsEmpty(false);
	}

	function searchCompany(content: string) {
		const query = content.replace(" ", "%20");

		fetch(`${url}?text=${query}`)
			.then((result) => result.json())
			.then((result) => setData(result));
	}

	return (
		<form className="filter">
			<div>
				<label
					className={`primary--3 ${isEmpty ? "" : "up"}`}
					htmlFor={id}
				>
					Buscar Empresas...
				</label>
				<input
					id={id}
					className="primary--3"
					value={inputValue}
					onChange={(e) => handleChange(e.target)}
				/>
			</div>
		</form>
	);
};

export default Filter;
