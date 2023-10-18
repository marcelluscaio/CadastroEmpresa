import Link from "next/link";
import Image from "next/image";
import "./style.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<Link href="/">
					<Image
						src="/logo_opea.svg"
						width={107}
						height={32}
						alt="Logo da Opea"
					/>
				</Link>
				<figure>
					<figcaption className="primary--3--bold">Nome do usuário</figcaption>
					<Image
						src="/icon-user.svg"
						width={24}
						height={24}
						alt="Foto do usuário"
					/>
				</figure>
			</div>
		</header>
	);
};

export default Header;
