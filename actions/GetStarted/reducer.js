import { GET_POST } from './constants'

const INITIAL_STATE = {
    content: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_POST:
            return {...state, content: action.payload}
        default:
        	return state
    }    
}