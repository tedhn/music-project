//Library Imports
import React, { useState } from "react";

// Component Imports
import { Navbar, Player } from "./components";
import RoutesList from "./Routes";
import { Login } from "./pages";

const App = () => {
	const [authorized, setAuthorized] = useState(false);

	return (
		<div className='grid w-screen h-screen grid-cols-12 grid-rows-6 bg-dark'>
			{authorized ? (
				<>
					<Navbar />
					<RoutesList />
					<Player />
				</>
			) : (
				<Login setAuthorized={setAuthorized} />
			)}
		</div>
	);
};

export default App;
