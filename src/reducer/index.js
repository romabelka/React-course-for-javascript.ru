import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import comments from './comments'
import { routerStateReducer as router} from 'redux-router'

export default combineReducers({
    counter, articles, comments, router
})