//Library Imports
import React from "react";

// Component Imports
import { Navbar, Player } from "./components";
import RoutesList from "./Routes";

const App = () => {
	console.log(process);
	return (
		<div className='grid w-screen h-screen grid-cols-12 grid-rows-6'>
			<Navbar />
			<RoutesList />
			<Player />
		</div>
	);
};

export default App;
