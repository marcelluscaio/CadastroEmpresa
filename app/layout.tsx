import type { Metadata } from "next";
import { Jost, Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";
import "./styles/style.scss";
import Header from "./components/Header/Header";

const jost = Jost({
	subsets: ["latin"],
	variable: "--jost",
	display: "swap",
});

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--roboto",
	weight: "400",
	display: "swap",
});

const robotoFlex = Roboto_Flex({
	subsets: ["latin"],
	variable: "--roboto-flex",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Caio Cabral - Cadastro de Empresas",
	description: "Created by Caio Cabral",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt-BR"
			className={`
				${jost.variable} 
				${roboto.variable} 
				${robotoFlex.variable} 
				`}
		>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
