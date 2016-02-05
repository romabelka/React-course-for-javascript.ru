import { ADD_NEW_ARTICLE } from './constants'

export function addArticle(article) {
    return {
        type: ADD_NEW_ARTICLE,
        data: { article }
    }
}