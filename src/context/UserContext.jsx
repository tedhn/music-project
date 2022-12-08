import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [playlists, setPlaylists] = useState([]);

	const updateUser = (newUser) => {
		setUser(newUser);
	};

	const updatePlaylists = (newPlaylist) => {
		setPlaylists(newPlaylist);
	};

	const addPlaylist = (playlistName) => {
		const newPlaylist = [...playlists];
		newPlaylist.unshift(playlistName);

		setPlaylists(newPlaylist);
	};

	return (
		<UserContext.Provider
			value={{ user, updateUser, playlists, updatePlaylists, addPlaylist }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
