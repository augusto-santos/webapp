const INITIAL_STATE = {conteudo: ['loading...']}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOAD_ALL_POSTS':
            return {...state, conteudo: action.payload.data}
        default:
        	return state
    }    
}