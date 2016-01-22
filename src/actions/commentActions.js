import AppDispatcher from '../Dispatcher'
import { ADD_NEW_COMMENT, DELETE_COMMENT } from './constants'

export function addComment(article, text) {
    AppDispatcher.dispatch({
        type: ADD_NEW_COMMENT,
        data: {
            article,
            text
        }
    })
}

export function deleteComment(id, article) {
    AppDispatcher.dispatch({
        type: DELETE_COMMENT,
        data: {
            id,
            article
        }
    })
}

