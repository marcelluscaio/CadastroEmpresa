"use client";

import { useState } from "react";

import Filter from "./components/Filter/Filter";
import AddCompany from "./components/AddCompany/AddCompany";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	return (
		<>
			<Filter id="home-filter" />
			<AddCompany toggleModal={setModalIsOpen} />
			<List />
			<Modal isOpen={modalIsOpen} />
		</>
	);
};

export default Home;
