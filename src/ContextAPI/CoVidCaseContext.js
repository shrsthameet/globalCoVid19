import React, {useState, createContext, useEffect} from "react";
import axios from "axios";

export const CoVidCaseContext = createContext();

const API_PATH = `https://corona.lmao.ninja/countries?fbclid=IwAR3AEMVx3jWFDfm-mXxEWtvHZhd_4enAWLc5ynMB5fBFKvFYFWjcgODVVPY`;
const API_KEY = {
	"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	"x-rapidapi-key": "9fed399570msh663b031bcdef2b4p1c0023jsnb006081f81ed"
};

const CoVidCaseContextProvider = (props) => {
	const [coVidCases, setCoVidCases] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	async function fetchCoVidCase() {
		setIsLoading(true);
		const res = await axios({
			method: "get",
			url: `${API_PATH}`,
			headers: API_KEY
		});
		const data = res.data.filter(worldData => worldData.country === "World");
		setCoVidCases(Object.assign(data, ...data));
		setIsLoading(false);
	}


	useEffect(() => {
		fetchCoVidCase();
	}, []);

	return (
		<CoVidCaseContext.Provider value={{coVidCases, isLoading}}>
			{props.children}
		</CoVidCaseContext.Provider>
	);
};

export default CoVidCaseContextProvider;
