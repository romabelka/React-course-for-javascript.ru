import { _START, _SUCCESS, _FAIL } from '../AC/constants'

import $ from 'jquery'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({...rest, ...{type: type + _START}})

    $.get(callAPI.url)
        .done((response) => {
            next({...rest, ...{type: type + _SUCCESS}, response})
        })
        .fail((error) => {
            next({...rest, ...{type: type + _FAIL}, error})
        })
}