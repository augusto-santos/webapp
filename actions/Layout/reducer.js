import { CHANGE_SEARCH, TOOGLE_MENU } from './constants'

const INITIAL_STATE = {
  search: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_SEARCH:
      return { ...state, search: action.payload }
    default:
      return state
  }
}

export default reducer