import { CHANGE_SEARCH } from './constants'

export const changeDescription = (e) => ({
  type: CHANGE_SEARCH,
  payload: e.target.value
})