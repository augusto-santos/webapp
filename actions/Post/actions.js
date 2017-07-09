import { cnx } from '../../core/api'
import { LOAD_POST, LOAD_CONTENT, LOAD_USER } from './constants'
import md from '../../components/Markdown/utils/markdown-parser'

export const loadPost = (id) => {
	return dispatch => {
		cnx.get(`/Posts/${id}`)
			.then(resp => dispatch({
				type: LOAD_POST,
				payload: resp.data
			}))
			.then(resp => dispatch(loadContent(resp.payload.contentMD), console.log(resp)))
	}
}

export const loadContent = ( file ) => {
	return dispatch => {
		cnx.get(`/containers/posts/download/${file}`)
			.then(resp => dispatch({
				type: LOAD_CONTENT,
				payload: md(resp.data)
			}))
	}
}

export const loadUser = ( id ) => {
	return dispatch => {
		cnx.get(`/Autores/${id}`)
			.then(resp => dispatch({
				type: LOAD_USER,
				payload: resp.data
			}))
	}
}