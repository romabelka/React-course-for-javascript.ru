import $ from 'jquery'

export function loadAllArticles() {
    return $.get('/api/article')
}

export function loadById(id) {
    return $.get(`/api/article/${id}`)
}