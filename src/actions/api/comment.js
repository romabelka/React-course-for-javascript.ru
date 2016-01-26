import $ from 'jquery'

export function loadCommentsForArticle(id) {
    return $.get(`/api/comment?article=${id}`)
}