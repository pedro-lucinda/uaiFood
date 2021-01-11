import axios from 'axios';

const api = axios.create({
	baseURL: 'https://developers.zomato.com/api/v2.1', headers: {
		"user-key": "df69a2b0d639cdda115de94ec9261946",
	},
});

export default api;
