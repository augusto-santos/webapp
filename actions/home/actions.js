import { cnx } from '../../core/api'
import { LOAD_ALL_TASKS } from './constants'

export const loadTasks = () => {
    return dispatch => {
        cnx.get('/tasks')
            .then(resp => dispatch({
                type: LOAD_ALL_TASKS,
                payload: resp.data
            }))
    }
}