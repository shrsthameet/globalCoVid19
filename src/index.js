import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CoVidCaseContextProvider from "./ContextAPI/CoVidCaseContext";
import CoVidByCountryContextProvider from "./ContextAPI/CovVidByCountryContext";
import CoVidWorldDataContextProvider from "./ContextAPI/CoVidWorldDataContext";

ReactDOM.render(
	<React.StrictMode>
		<CoVidCaseContextProvider>
			<CoVidWorldDataContextProvider>
				<CoVidByCountryContextProvider>
					<App/>
				</CoVidByCountryContextProvider>
			</CoVidWorldDataContextProvider>
		</CoVidCaseContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
