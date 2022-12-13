import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { loginAccount } from "@/api";

const Login = ({ setAuthorized }) => {
	const {
		VITE_AUTH_ENDPOINT,
		VITE_CLIENT_ID,
		VITE_REDIRECT_URI,
		VITE_RESPONSE_TYPE,
		VITE_SCOPE,
	} = import.meta.env;

	const AUTH_LINK = `${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TYPE}&scope=${VITE_SCOPE}`;

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const code = location.search.split("=")[1];

		if (code !== undefined) {
			try {
				loginAccount(code).then(() => {
					setAuthorized(true);
					navigate("/");
				});
			} catch (e) {
				console.log(e);
			}
		}
	}, []);

	return (
		<div className='absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
			<a
				href={AUTH_LINK}
				className='py-3 text-lg font-medium rounded-full cursor-pointer px-9 bg-gold text-dark'>
				LOGIN
			</a>
		</div>
	);
};

export default Login;
