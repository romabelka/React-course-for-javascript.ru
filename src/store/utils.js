import { loadAllArticles } from '../AC/articles'
import store from './index'

export function checkAndLoadAllArticles() {
    const {articles} = store.getState()
    if (!articles.entities.length && !articles.isLoading) store.dispatch(loadAllArticles())
}

export function getRelation(item, relation) {
    const relStore = store.getState()[relation]
    if (!relStore || !item[relation]) return []
    return relStore.entities.filter(el => item[relation].indexOf(el.id) >= 0)
}