import axios from 'axios'
import { LOAD_ALL_POSTS } from './constants'

const cnx = axios.create({baseURL: 'http://0.0.0.0:5000/api'})

export const loadAllPosts = () => {
	return (dispatch) =>{
		cnx.get('/Posts')
			.then((resp) => dispatch({
				type: LOAD_ALL_POSTS,
				payload: resp.data
			}))
	}
}