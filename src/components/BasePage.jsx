import React from "react";
import Navbar from "./Navbar";

const BasePage = ({ children }) => {
	return (
		<div className='h-screen col-start-3 col-end-13 p-4 bg-gray'>
			{children}
		</div>
	);
};

export default BasePage;
