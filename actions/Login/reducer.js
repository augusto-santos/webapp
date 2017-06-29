import { CHANGE_FIELD } from './constants'

const INITIAL_STATE = {
  emailField: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_FIELD: 
      return { ...state, emailField: action.payload}
    default:
      return state
  }
}

export default reducer