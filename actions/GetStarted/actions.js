import axios from 'axios'

export function get(){
	return axios.get('http://0.0.0.0:5000/api/Posts')
}

export const loadAllPosts = () => {
	return {
		type: 'LOAD_ALL_POSTS',
		payload: get()
	}
}