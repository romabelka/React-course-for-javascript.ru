import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_ARTICLE, ADD_NEW_COMMENT, DELETE_COMMENT } from '../actions/constants'


class ArticleStore extends Store {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_NEW_ARTICLE:
                    this.add(Object.assign({
                        id: this.getIncrementalId(),
                        title: '',
                        text: ''
                    },data.article))

                    this.emitChange()
                    break;
                case ADD_NEW_COMMENT:
                    AppDispatcher.waitFor([this.stores.comments.dispatchToken])
                    const comment = this.stores.comments.getAll().slice(-1)[0]
                    this.getById(data.article).comments.push(comment.id)
                    this.emitChange()
                    break;

                case DELETE_COMMENT:
                    AppDispatcher.waitFor([this.stores.comments.dispatchToken])
                    let article = this.getById(data.article)
                    article.comments = article.comments.filter(id => id != data.id)
                    this.emitChange()
                    break

            }
        })
    }
}

export default ArticleStore