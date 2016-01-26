import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_COMMENT, DELETE_COMMENT, LOAD_ARTICLES_SUCCESS,
    LOAD_COMMENTS_START, LOAD_COMMENTS_FAIL, LOAD_COMMENTS_SUCCESS
} from '../actions/constants'
import { loadComments } from '../actions/commentActions'

class CommentStore extends Store {
    constructor(...args) {
        super(...args)
        this.loading = []
        this.loaded = []

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

                case LOAD_COMMENTS_START:
                    this.loading.push(data.args[0])
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_SUCCESS:
                    this.loading = this.loading.filter(id => id != data.args[0])
                    this.loaded.push(data.args[0])
                    data.response.forEach(this.add.bind(this))
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_FAIL:
                    this.loading = this.loading.filter(id => id != data.args[0])
                    this.emitChange()
                    break;
            }
        })
    }
}

export default CommentStore