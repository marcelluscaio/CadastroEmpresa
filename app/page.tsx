import Filter from "./components/Filter/Filter";
import AddCompany from "./components/AddCompany/AddCompany";
import List from "./components/List/List";

const Home = () => {
	return (
		<>
			<Filter id="home-filter" />
			<AddCompany />
			<List />
		</>
	);
};

export default Home;
