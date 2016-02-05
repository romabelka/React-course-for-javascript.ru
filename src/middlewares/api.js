import { _START, _SUCCESS, _FAIL } from '../AC/constants'

import $ from 'jquery'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)
    console.log('---', {...rest, ...{type: type + _START}});
    next({...rest, ...{type: type + _START}})
}