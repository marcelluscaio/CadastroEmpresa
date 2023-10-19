"use client";

import { useState } from "react";
import "./style.scss";

type Props = {
	id: string;
};

const Filter = ({ id }: Props) => {
	const [inputValue, setInputValue] = useState("");
	const [isEmpty, setIsEmpty] = useState(true);

	function handleChange(input: HTMLInputElement) {
		const newValue = input.value;
		isContentEmpty(newValue);
		setInputValue(newValue);
	}

	function isContentEmpty(content: string) {
		content.trim() === "" ? setIsEmpty(true) : setIsEmpty(false);
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
