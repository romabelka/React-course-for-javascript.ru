import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'

const store = compose(
    applyMiddleware(logger)
)(createStore)(reducer)

export default storea