import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const updateUser = (newUser) => {
		console.log("updating user");
		setUser(newUser);
	};

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
