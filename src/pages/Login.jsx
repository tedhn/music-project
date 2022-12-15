import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { loginAccount } from "@/api";

const Login = ({ setAuthorized }) => {
	// const {
	// 	VITE_AUTH_ENDPOINT,
	// 	VITE_CLIENT_ID,
	// 	VITE_REDIRECT_URI,
	// 	VITE_RESPONSE_TYPE,
	// 	VITE_SCOPE,
	// } = import.meta.env;

	const VITE_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const VITE_REDIRECT_URI = "https://symphonious-cocada-86f353.netlify.app/";
	const VITE_RESPONSE_TYPE = "code";
	const VITE_CLIENT_ID = "fffed6f6f8e0455cb1d56dfeca1f47cd";
	const VITE_SECRET_ID = "6a8cec9a3f104cadbd66774d095aab02";
	const VITE_SCOPE =
		"streaming%20user-read-email%20user-read-private%20user-read-recently-played%20playlist-modify-public%20playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20user-top-read%20user-library-read%20user-library-modify";

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
