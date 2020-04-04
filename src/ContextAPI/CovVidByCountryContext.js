import React, {createContext, useState} from "react";
import axios from "axios";

export const CoVidByCountryContext = createContext();

const CoVidByCountryContextProvider = (props) => {
	const [countryStat, setCountryStat] = useState([]);
	const [isLoading, setIsLoading] = useState(false);


	async function fetchData(country) {
		setIsLoading(true);
		const result = await axios
			.get(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`, {
				headers: {
					"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key": "9fed399570msh663b031bcdef2b4p1c0023jsnb006081f81ed"
				}
			},);
		setCountryStat(result.data.latest_stat_by_country);
		setIsLoading(false);
	}

	return (
		<CoVidByCountryContext.Provider value={{fetchData, countryStat, isLoading}}>
			{props.children}
		</CoVidByCountryContext.Provider>
	);
};

export default CoVidByCountryContextProvider;
