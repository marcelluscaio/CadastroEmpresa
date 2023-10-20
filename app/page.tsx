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

	useEffect(() => {
		fetch("https://outros.opea-uat.solutions/prova/front/api/clients")
			.then((result) => result.json())
			.then((result) => setData(result));
	}, []);

	return (
		<>
			<Filter id="home-filter" />
			<AddCompany toggleModal={setModalIsOpen} />
			<List data={data} />
			<Modal
				isOpen={modalIsOpen}
				toggleModal={setModalIsOpen}
				setData={setData}
			/>
		</>
	);
};

export default Home;
