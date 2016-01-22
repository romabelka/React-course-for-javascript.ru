import AppDispatcher from '../Dispatcher'
import { ADD_NEW_ARTICLE, LOAD_ARTICLES_FAIL, LOAD_ARTICLES_START, LOAD_ARTICLES_SUCCESS } from './constants'
import { loadAllArticles } from './api/article'

export function addArticle(article) {
    AppDispatcher.dispatch({
        type: ADD_NEW_ARTICLE,
        data: {
            article
        }
    })
}

export function loadArticles() {
    AppDispatcher.dispatch({
        type: LOAD_ARTICLES_START
    })

    loadAllArticles()
        .done((response) => {
            AppDispatcher.dispatch({
                type: LOAD_ARTICLES_SUCCESS,
                data: { response }
            })
        })
        .fail((error) => {
            AppDispatcher.dispatch({
                type: LOAD_ARTICLES_FAIL,
                data: { error }
            })
        })
}