import { LOAD_ALL_TASKS } from './constants'

const INITIAL_STATE = {
    tasks: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOAD_ALL_TASKS:
            return { ... state, tasks: action.payload }
        default:
            return state
    }
}