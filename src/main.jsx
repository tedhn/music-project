import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

import App from "./App";
import UserContextProvider from "./context/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
