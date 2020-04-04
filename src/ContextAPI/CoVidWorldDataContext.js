import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const CoVidWorldDataContext = createContext();

const columns = [
	{
		title: "",
		dataIndex: "countryFlag",
		// width: 80,
		render: (countryFlag) => <img style={{height: 20, width: 40}} src={countryFlag} alt={countryFlag}/>
	},
	{
		title: "Country Name",
		dataIndex: "countryName",
		// width: 150,
	},
	{
		title: "Total Cases",
		dataIndex: "totalCases",
		// width: 150,
	},
	{
		title: "Active Cases",
		dataIndex: "activeCases",
	},
	{
		title: "Total Deaths",
		dataIndex: "totalDeaths",
	},
	{
		title: "Recovered",
		dataIndex: "recovered",
	},
	{
		title: "Critical Cases",
		dataIndex: "criticalCases",
	},
];

const CoVidWorldDataContextProvider = (props) => {
	const [worldData, setWorldData] = useState([{countryInfo: {}}]);

	async function fetchCoVidWorldData() {
		const response = await axios.get("https://corona.lmao.ninja/countries?fbclid=IwAR3AEMVx3jWFDfm-mXxEWtvHZhd_4enAWLc5ynMB5fBFKvFYFWjcgODVVPY");
		const data = await response.data;
		setWorldData(data);
	}

	useEffect(() => {
		fetchCoVidWorldData();
	}, []);

	const coVidFilterData = worldData.filter(resData => resData.country !== "World");

	const data = coVidFilterData.map(res => {
		return (
			{
				countryFlag: res.countryInfo.flag,
				countryName: res.country,
				totalCases: res.cases,
				activeCases: res.active,
				totalDeaths: res.deaths,
				recovered: res.recovered,
				criticalCases: res.critical
			}
		);
	});


	return (
		<CoVidWorldDataContext.Provider value={{columns, data}}>
			{props.children}
		</CoVidWorldDataContext.Provider>
	);
};

export default CoVidWorldDataContextProvider;
