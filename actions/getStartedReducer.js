const INITIAL_STATE = {content: ['Loading...']}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOAD_POSTS':
            return {...state, content: action.payload}
        default:
            return state
    }    
}