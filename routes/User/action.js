import { SET_USER, UNSET_USER } from './constants'

export function setUser(token){
	return {
		type: SET_USER,
		token
	}
}

export function unsetUser(){
	return {
		type: UNSET_USER
	}
}