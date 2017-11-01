import axios from 'axios'

/** Instancia do axios */
export const cnx = axios.create({
		baseURL: 'https://rest_api-augustosantos55828536.codeanyapp.com/api',
		// timeout: 1000
	})
/** Config Axios */