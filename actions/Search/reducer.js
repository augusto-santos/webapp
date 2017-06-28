import { CHANGE_SEARCH } from './constants'

const INITIAL_STATE = ''

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_SEARCH:
      return { ...state, busca: action.payload }
    default:
      return state
  }
}