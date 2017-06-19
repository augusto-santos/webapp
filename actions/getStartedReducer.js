const INITIAL_STATE = 'Loading...'

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'loadPosts':
            return{...state, content: action.payload}
        default:
            return state
    }    
}