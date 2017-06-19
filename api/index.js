import axios from 'axios'

/** Instancia do axios */
export const connect = axios.create({
		baseURL: 'http://0.0.0.0:5000/api',
		timeout: 1000
	})
/** Config Axios */