import { cnx } from '../../api'
import md from '../../components/Markdown/utils/markdown-parser'
import { GET_POST, LOAD_USER } from './constants'

export const loadPosts = () => {
	return dispatch => {
		cnx.get('/containers/container1/download/Post.md')
			.then(resp => dispatch({
				type: GET_POST,
				payload: md(resp.data)
			}))
	}
}

export const loadUser = () => {
	return dispatch => {
		cnx.get('/Autores')
			.then(resp => dispatch({
				type: LOAD_USER,
				payload: resp.data
			}))
	}
}

export const loadContentMD = (container, file) => {
	return dispatch => {
		cnx.get(`/containers/${container}/download/${file}`)
			then(resp => dispatch({
				type: 'LOAD_CONTENT_MD',
				payload: resp.data
			}))
	}
}

// export const loadPostUser = (idPost, idUser) => {
// 	return dispatch => {
// 		cnx.get([``])
// 	}
// }