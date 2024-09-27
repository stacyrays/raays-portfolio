import api from "./api.js";
import { DOG_KEY } from "../constants/data.js";

// fetch random dog api
export const fetchRandomDogs = async () => {
	try {
		const res = await api.get(
			`https://api.thedogapi.com/v1/images/search?limit=10`,
			{
				headers: {
					'x-rapidapi-host': 'api.thedogapi.com',
					'x-rapidapi-key': DOG_KEY
				},
				// params: {category: 'all', count: '10'}
			}
		).then(result => result.data);
        return res;
	} catch (err) {
		console.log(err);
	}
};

// fetch specific dog id api
export const fetchDog = async (id) => {
	try {
		const res = await api.get(
			`https://api.thedogapi.com/v1/images/${id}`,
			{
				headers: {
					'x-rapidapi-host': 'api.thedogapi.com',
					'x-rapidapi-key': DOG_KEY
				},
			}
		).then(result => result.data);
        return res;
	} catch (err) {
		console.log(err);
	}
};

const getSearchResult = async (apiURL) => {
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		// setSearchResult(data);
	} catch(error) {
		console.log('error', error)
	}
}





