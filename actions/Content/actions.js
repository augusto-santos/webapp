import { cnx } from '../../core/api'
import { LOAD_ALL_POSTS } from './constants'

export const loadAllPosts = () => {
	return (dispatch) =>{
		cnx.get('/tasks')
			.then((resp) => dispatch({
				type: LOAD_ALL_POSTS,
				payload: resp.data
			}))
	}
}