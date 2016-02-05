import $ from 'jquery'
window.$ = $
export default store => next => action => {
    const stateBefore = store.getState()
    next(action)
    const stateAfter = store.getState()
    $.post({
        contentType: 'application/json',
        url: '/api/report',
        data: JSON.stringify({
            stateBefore, action, stateAfter
        })
    }).done(console.log.bind(console))
}