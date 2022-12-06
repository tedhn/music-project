import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { BasePage } from "./components";
import { Home, Search, Playlist, Login, Error } from "./pages";
import { getMyData } from "./api";
import { UserContext } from "./context/UserContext";

const RoutesList = () => {
	const { updateUser } = useContext(UserContext);

	useEffect(() => {
		handleOnLoad();
	}, []);

	const handleOnLoad = async () => {
		const { data } = await getMyData();

		updateUser(data);
	};

	return (
		<BasePage>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='search'>
					<Route path='' element={<Search />} />
					<Route path=':query' element={<Search />} />
				</Route>

				<Route path='playlist'>
					<Route path='' element={<Playlist />} />
					<Route path=':id' element={<Playlist />} />
				</Route>
				<Route path='*' element={<Error />} />
			</Routes>
		</BasePage>
	);
};

export default RoutesList;
