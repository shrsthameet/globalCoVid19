import React, {useState, createContext, useEffect} from "react";
import axios from "axios";

export const CoVidCaseContext = createContext();

const API_PATH = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php`;
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
		const data = res.data;
		setCoVidCases(data);
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
