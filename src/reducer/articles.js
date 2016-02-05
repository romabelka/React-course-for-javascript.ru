import {articles} from '../fixtures'
import { ADD_NEW_ARTICLE } from '../AC/constants'

export default (state = articles, action) => {
    const { type, data } = action

    switch (type) {
        case ADD_NEW_ARTICLE:
            return state.concat(Object.assign({}, data.article, {id: Math.random() * 100 + state.length}))
    }

    return state
}