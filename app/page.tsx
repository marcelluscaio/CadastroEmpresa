"use client";

import { useState, useEffect } from "react";

import Filter from "./components/Filter/Filter";
import AddCompany from "./components/AddCompany/AddCompany";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

type Data = {
	id: string;
	name: string;
	email: string;
	cnpj: string;
};

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const [data, setData] = useState<Data[]>([]);

	const [formId, setFormId] = useState("");
	const [formName, setFormName] = useState("");
	const [formCnpj, setFormCnpj] = useState("");
	const [formEmail, setFormEmail] = useState("");

	useEffect(() => {
		fetch("https://outros.opea-uat.solutions/prova/front/api/clients")
			.then((result) => result.json())
			.then((result) => setData(result));
	}, []);

	return (
		<>
			<Filter
				id="home-filter"
				setData={setData}
			/>
			<AddCompany
				toggleModal={setModalIsOpen}
				setFormId={setFormId}
				setFormName={setFormName}
				setFormCnpj={setFormCnpj}
				setFormEmail={setFormEmail}
			/>
			<List
				data={data}
				toggleModal={setModalIsOpen}
				formId={formId}
				formName={formName}
				formCnpj={formCnpj}
				formEmail={formEmail}
				setFormId={setFormId}
				setFormName={setFormName}
				setFormCnpj={setFormCnpj}
				setFormEmail={setFormEmail}
			/>
			<Modal
				isOpen={modalIsOpen}
				toggleModal={setModalIsOpen}
				setData={setData}
				formId={formId}
				formName={formName}
				formCnpj={formCnpj}
				formEmail={formEmail}
				setFormId={setFormId}
				setFormName={setFormName}
				setFormCnpj={setFormCnpj}
				setFormEmail={setFormEmail}
			/>
		</>
	);
};

export default Home;
