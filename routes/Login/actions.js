import { FIELD_CHANGE } from './constants'

export const handleChange = (e) => {
  return{
    type: FIELD_CHANGE,
    payload: e.target.value
  }
}