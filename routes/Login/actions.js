import { LOGIN_REQUESTING, CHANGE_FIELD } from './constants'

export const loginRequest = function loginRequest({email, password}){
	return{
		type: LOGIN_REQUESTING,
		email,
		password
	}
}
export const changeEmail = (e) => {
	return {
		type: CHANGE_FIELD,
		payload: e.target.value
	}
}