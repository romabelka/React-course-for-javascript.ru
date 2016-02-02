import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import DevToolsContainer from '../containers/DevTools'

const store = compose(
    applyMiddleware(logger),
    DevToolsContainer.instrument()
)(createStore)(reducer)

export default store