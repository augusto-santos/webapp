import { CHANGE_SEARCH } from './constants'

const INITIAL_STATE = {
  search: '',
  sidebarOpen: true
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