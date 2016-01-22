import $ from 'jquery'

export function loadAllArticles() {
    return $.get('/api/article')
}