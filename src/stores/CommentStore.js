import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_COMMENT, DELETE_COMMENT, LOAD_ARTICLES_SUCCESS,
    LOAD_COMMENTS_START, LOAD_COMMENTS_FAIL, LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_PAGE_START, LOAD_COMMENTS_PAGE_SUCCESS, LOAD_COMMENTS_PAGE_FAIL
} from '../actions/constants'
import { loadComments, loadForPage } from '../actions/commentActions'

class CommentStore extends Store {
    constructor(...args) {
        super(...args)
        this.pages = []

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
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_SUCCESS:
                    data.response.forEach(this.add.bind(this))
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_FAIL:
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_PAGE_START:
                    this.pages[data.args[0]] = []
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_PAGE_SUCCESS:
                    this.pages[data.args[0]] = data.response.records.map((comment) => comment.id)
                    data.response.records.forEach(this.add.bind(this))
                    this.__totalComments = data.response.total
                    this.emitChange()
                    break;
            }
        })
    }

    getTotalComments() {
        return this.__totalComments
    }
    getOrLoadForPage(num) {
        if (!this.pages[num]) return loadForPage(num)
        return this.pages[num].map(this.getById.bind(this))
    }
}

export default CommentStore