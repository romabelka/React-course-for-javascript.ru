//import {articles} from '../fixtures'
import { ADD_NEW_ARTICLE, LOAD_ALL_ARTICLES, _START, _FAIL, _SUCCESS } from '../AC/constants'

export default (state = [], action) => {
    const { type, data } = action

    switch (type) {
        case ADD_NEW_ARTICLE:
            return state.concat(Object.assign({}, data.article, {id: Math.random() * 100 + state.length}))

        case LOAD_ALL_ARTICLES + _START:
            return 'loading'
    }

    return state
}