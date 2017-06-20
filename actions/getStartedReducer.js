import { LOADING_POSTS, POSTS_SUCCESS, POSTS_FAILURE } from './getStartedActions'

const INITIAL_STATE = {content: ['Loading...']}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_POSTS:
          return {...state, content: action.payload}
        case POSTS_SUCCESS:
        	return {...state, content: action.payload}
        case POSTS_FAILURE:
        	return {...state, content: action.payload}
        default:
        	return state
    }    
}