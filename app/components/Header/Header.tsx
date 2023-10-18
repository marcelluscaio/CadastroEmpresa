import Link from "next/link";
import Image from "next/image";
const Header = () => {
	return (
		<header>
			<Link href="/">
				<Image
					src="/logo_opea.svg"
					width={107}
					height={32}
					alt="Logo da Opea"
				/>
			</Link>
		</header>
	);
};

export default Header;
