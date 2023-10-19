"use client";

import { MouseEvent, useRef } from "react";
import "./style.scss";

type Props = {
	isOpen: boolean;
	toggleModal: Function;
};

const Modal = ({ isOpen, toggleModal }: Props) => {
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
				<button onClick={handleToggle}></button>
			</header>
			<form>
				<fieldset>
					<label className="secondary">Nome</label>
					<input className="secondary" />
				</fieldset>
			</form>
		</dialog>
	);
};

export default Modal;
