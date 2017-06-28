import { FIELD_CHANGE } from './constants'

const INITIAL_STATE = ''

 export const loginReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
     case FIELD_CHANGE:
      return { ...state, form: action.payload}
     default:
      return state
   }
 }