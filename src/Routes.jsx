import React from "react";
import { Routes, Route } from "react-router-dom";

import { BasePage } from "./components";
import { Home, Search, Playlist, Login } from "./pages";

const RoutesList = () => {
	return (
		<BasePage>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='search'>
					<Route path='' element={<Search />} />
					<Route path=':query' element={<Search />} />
				</Route>

				<Route path='playlist'>
					<Route path='' element={<Playlist />} />
					<Route path=':id' element={<Playlist />} />
				</Route>
			</Routes>
		</BasePage>
	);
};

export default RoutesList;
