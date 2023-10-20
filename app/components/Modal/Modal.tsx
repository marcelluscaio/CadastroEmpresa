"use client";

import { MouseEvent, useRef } from "react";
import Form from "../Form/Form";
import "./style.scss";

type Props = {
	isOpen: boolean;
	toggleModal: Function;
	setData: Function;
};

const Modal = ({ isOpen, toggleModal, setData }: Props) => {
	const ref = useRef<HTMLDialogElement>(null);

	isOpen ? ref.current?.showModal() : ref.current?.close();

	function handleToggle() {
		toggleModal((current: boolean) => !current);
	}

	function checkClickOutside(e: MouseEvent) {
		const target = e.target;
		if ((target as HTMLElement).tagName === "DIALOG") {
			handleToggle();
		}
	}

	return (
		<dialog
			ref={ref}
			className="modal"
			onCancel={handleToggle}
			onClick={(e) => checkClickOutside(e)}
		>
			<header>
				<p className="primary--bigLine">Cadastrar Empresa</p>
				<button
					onClick={handleToggle}
					aria-label="Fechar modal"
				></button>
			</header>
			<Form
				closeModal={handleToggle}
				setData={setData}
			/>
		</dialog>
	);
};

export default Modal;
