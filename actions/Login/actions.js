import { CHANGE_FIELD } from './constants'

export const changeField = (e) => ({
  type: CHANGE_FIELD,
  payload: e.target.value
})