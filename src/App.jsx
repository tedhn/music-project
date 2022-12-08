//Library Imports
import React, { useState } from "react";

// Component Imports
import { Navbar, Player, Modal } from "./components";
import RoutesList from "./Routes";
import { Login } from "./pages";

const App = () => {
	const [authorized, setAuthorized] = useState(false);

	const [isShowModal, setShowModal] = useState(false);

	return (
		<div className='grid grid-cols-12 bg-dark'>
			{authorized ? (
				<>
					{isShowModal && <Modal setShowModal={setShowModal} />}
					<Navbar setShowModal={setShowModal} />
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
