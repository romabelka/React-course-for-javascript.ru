import AppDispatcher from '../Dispatcher'
import { ADD_NEW_ARTICLE, LOAD_ARTICLES, LOAD_ARTICLE_BY_ID } from './constants'
import { loadAllArticles, loadById } from './api/article'
import { asyncAC } from './api/utils'

export function addArticle(article) {
    AppDispatcher.dispatch({
        type: ADD_NEW_ARTICLE,
        data: {
            article
        }
    })
}

export const loadArticles = asyncAC(LOAD_ARTICLES, loadAllArticles)
export const loadArticleById = asyncAC(LOAD_ARTICLE_BY_ID, loadById)