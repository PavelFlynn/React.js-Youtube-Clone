import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	url: BASE_URL,
	params: {
		maxResults: '50'
	},
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
	try {

		const { data } = await axios.get(`${BASE_URL}/${url}`, options);
		return data;

	} catch (error) {

		if (error.response) {
			// Request made but the server responded with an error
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else if (error.request) {
			// Request made but no response is received from the server.
			console.log(error.request);
		} else {
			// Error occured while setting up the request
			console.log('Error', error.message);
		}
		
	}
}