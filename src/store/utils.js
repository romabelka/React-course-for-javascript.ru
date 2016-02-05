import { loadAllArticles } from '../AC/articles'
import store from './index'

export function checkAndLoadAllArticles() {
    const {articles} = store.getState()
    if (!articles.entities.length && !articles.isLoading) store.dispatch(loadAllArticles())
}