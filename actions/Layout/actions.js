import { CHANGE_SEARCH } from './constants'

export const changeSearch = (e) => {
  return{
    type: CHANGE_SEARCH,
    payload: e.target.value
  }
}

// export const toggle = () => {
//   return {
//     type: TOGGLE_MENU
//   }
// }