const INITIAL_STATE = ''

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'DESCRIPTION_CHANGED':
      return { ...state, busca: action.payload }
    default:
      return state
  }
}