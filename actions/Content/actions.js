import { cnx } from '../../api'
import { LOAD_ALL_POSTS } from './constants'

export const loadAllPosts = () => {
	return (dispatch) =>{
		cnx.get('/Posts')
			.then((resp) => dispatch({
				type: LOAD_ALL_POSTS,
				payload: resp.data
			}))
	}
}