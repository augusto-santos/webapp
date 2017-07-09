import { cnx } from '../../core/api'
import md from '../../components/Markdown/utils/markdown-parser'
import { GET_POST, LOAD_USER, LOAD_CONTENT } from './constants'

export const loadPosts = () => {
	return dispatch => {
		cnx.get('/containers/posts/download/TheMissingProphecy.md')
			.then(resp => dispatch({
				type: GET_POST,
				payload: md(resp.data)
			}))
	}
}

export const loadUser = (id) => {
	return dispatch => {
		cnx.get(`/Autores/${id}`)
			.then(resp => dispatch({
				type: LOAD_USER,
				payload: resp.data
			}))
	}
}

export const loadContent = (file) => {
	return dispatch => {
		cnx.get(`/containers/posts/download/${file}`)
			.then(resp => dispatch({
				type: LOAD_CONTENT,
				payload: md(resp.data)
			}))
	}
}

export const loadedPost = (id) => {
	return dispatch => {
		cnx.get(`/Posts/${id}`)
			.then(resp => dispatch({
				type: 'LOADED_POST',
				payload: resp.data
			}))
			.then(res => dispatch(
				loadUser(res.payload.autorId),
				dispatch(loadContent(res.payload.contentMD))
			))
	}
}


// export const loadPostUser = (idPost, idUser) => {
// 	return dispatch => {
// 		cnx.get([``])
//			.then(resp => dispatch(loadContent(resp.data.id))) 
// 	}
// }

// http://0.0.0.0:5000/api/Autores/2