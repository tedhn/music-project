import React from "react";
import { Routes, Route } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import { BasePage } from "./components";
import { Home, Search, Playlist, Login } from "./pages";

const RoutesList = () => {
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
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BasePage>
	);
};

export default RoutesList;
