import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import reporter from '../middlewares/reporter'
import DevToolsContainer from '../containers/DevTools'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'

const store = compose(
    reduxReactRouter({ routes, createHistory }),
    applyMiddleware(logger, reporter),
    DevToolsContainer.instrument()
)(createStore)(reducer)

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer')
        store.replaceReducer(nextRootReducer)
    })
}


export default store