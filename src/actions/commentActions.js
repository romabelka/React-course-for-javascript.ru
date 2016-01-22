import AppDispatcher from '../Dispatcher'
import { ADD_NEW_COMMENT } from './constants'

export function addComment(article, text) {
    AppDispatcher.dispatch({
        type: ADD_NEW_COMMENT,
        data: {
            article,
            text
        }
    })
}