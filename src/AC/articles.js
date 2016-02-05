import { ADD_NEW_ARTICLE, LOAD_ALL_ARTICLES } from './constants'

export function addArticle(article) {
    return {
        type: ADD_NEW_ARTICLE,
        data: { article }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        data: {
            some: 'data'
        },
        callAPI: {
            url: '/api/article'
        }
    }
}