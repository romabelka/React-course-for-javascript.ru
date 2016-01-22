import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_COMMENT, DELETE_COMMENT, LOAD_ARTICLES_SUCCESS } from '../actions/constants'

class ArticleStore extends Store {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_NEW_COMMENT:
                    this.add(Object.assign({
                        id: this.getIncrementalId(),
                        text: ''
                    },data))

                    break;

                case DELETE_COMMENT:
                    this.delete(data.id)
                    break;

                case LOAD_ARTICLES_SUCCESS:
                    data.response.forEach((article) => {
                        if (!article.comments) return
                        article.comments.forEach((id) => {
                            this.add({ id })
                        })
                    })
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore