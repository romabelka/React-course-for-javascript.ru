//import {articles} from '../fixtures'
import { ADD_NEW_ARTICLE, LOAD_ALL_ARTICLES, _START, _FAIL, _SUCCESS } from '../AC/constants'

export default (state = {entities: [], isLoading: false}, action) => {
    const { type, data } = action

    switch (type) {
        case ADD_NEW_ARTICLE:
            return Object.assign(
                    {},
                    state,
                    {entities: state.entities.concat(Object.assign({}, data.article, {id: Math.random() * 100}))}
                )

        case LOAD_ALL_ARTICLES + _START:
            return Object.assign({}, state, {isLoading: true})
    }

    return state
}