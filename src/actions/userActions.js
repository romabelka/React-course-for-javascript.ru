import { ADD_USER } from './constants'
import AppDispatcher from '../Dispatcher'

export function addUser(name) {
    AppDispatcher.dispatch({
        type: ADD_USER,
        data: { name }
    })
}