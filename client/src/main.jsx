import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
		<Auth0Provider
			domain="dev-szfhqw2qb6p8ysgm.us.auth0.com"
			clientId="e2MQr6EOF5K9XNvs5cQkTz8mNGXK5KBQ"
			authorizationParams={{
				redirect_uri: window.location.origin
			}}>
				<Provider store={store}>
					<App />
				</Provider>
		</Auth0Provider>
			</BrowserRouter>
	</React.StrictMode>
);