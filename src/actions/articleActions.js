import AppDispatcher from '../Dispatcher'
import { ADD_NEW_ARTICLE } from './constants'

export function addArticle(article) {
    AppDispatcher.dispatch({
        type: ADD_NEW_ARTICLE,
        data: {
            article
        }
    })
}