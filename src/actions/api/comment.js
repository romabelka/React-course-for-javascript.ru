import $ from 'jquery'

export function loadCommentsForArticle(id) {
    return $.get(`/api/comment?article=${id}`)
}

export function loadPage(num) {
    return $.get(`/api/comment?limit=10&offset=${(num - 1) * 10}`)
}

export function loadAll() {
    return $.get(`/api/comment`)
}
