const INITIAL_STATE = ['loading...']

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'LOAD_ALL_POSTS':
			return {...state, content: action.payload.data}
		default:
			return state
	}
}