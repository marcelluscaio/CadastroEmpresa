"use client";

import { useRef } from "react";
import "./style.scss";

type Props = {
	isOpen: boolean;
};

const Modal = ({ isOpen }: Props) => {
	const ref = useRef<HTMLDialogElement>(null);

	isOpen ? ref.current?.showModal() : ref.current?.close();

	return (
		<dialog
			className="modal"
			ref={ref}
		>
			<header>
				<p>Cadastrar Empresa</p>
				<button> </button>
			</header>
			<form>
				<fieldset>
					<label>Nome</label>
					<input />
				</fieldset>
				<fieldset></fieldset>
			</form>
		</dialog>
	);
};

export default Modal;
