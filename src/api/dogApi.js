import api from "./api.js";
import { ART_KEY, ART_ACCESS_TOKEN, DOG_KEY } from "../contants/data.js";

const URLS = {
    // test url to remove later
    getDog: "dog",
};

const RESOURCE_TYPE = 'image';
const ID = '23';
const object_id = 'object-5773';

// with id
// https://api.harvardartmuseums.org/${RESOURCE_TYPE}/${ID}?apikey=${ART_KEY}`
// `https://api.harvardartmuseums.org/${RESOURCE_TYPE}?apikey=${ART_KEY}`,

// https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.labs.whatWouldMicahSay&access_token=****&format=json

// `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.galleries.isOpen&access_token=${ART_ACCESS_TOKEN}`

// `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=${ART_ACCESS_TOKEN}&object_id=${object_id}`

// `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.galleries.isOpen&access_token=${ART_ACCESS_TOKEN}`

// fetch from harvard art api
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

// fetch from harvard art api
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



