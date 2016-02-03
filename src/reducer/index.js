import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import { routerStateReducer as router} from 'redux-router'

export default combineReducers({
    counter, articles, router
})