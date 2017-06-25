import { LOGIN_REQUESTING, CHANGE_FIELD } from './constants'

const INITIAL_STATE = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
}

export const login = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case LOGIN_REQUESTING:
			return {
					...state,
					requesting: true,
					successful: false,
					messages: [{body: 'Logando...', time: new Date() }],
					errors: []
				}
		default:
			return state
	}
}

export const changeField = (state = {email: ''}, action) => {
	switch(action.type){
		case CHANGE_FIELD:
		 return {...state, email: action.payload }
		default:
			return state
	}
}