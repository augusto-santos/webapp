import axios from 'axios'

export const loadAllPosts = () => {
	const request = axios.get('http://0.0.0.0:5000/api/Posts')
	return{
		type: 'LOAD_ALL_POSTS',
		payload: request
	}
}