import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_ARTICLE, ADD_NEW_COMMENT, DELETE_COMMENT,
    LOAD_ARTICLES_FAIL, LOAD_ARTICLES_START, LOAD_ARTICLES_SUCCESS,
    LOAD_COMMENTS_START, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAIL
} from '../actions/constants'

import { loadArticles } from '../actions/articleActions'

class ArticleStore extends Store {
    constructor(...args) {
        super(...args)
        this.loaded = false

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
                    let article = this.getById(data.article)
                    article.comments = article.comments.filter(id => id != data.id)
                    this.emitChange()
                    break

                case LOAD_ARTICLES_START:
                    this.loading = true
                    this.emitChange()
                    break;

                case LOAD_ARTICLES_SUCCESS:
                    this.loading = false
                    this.loaded = true
                    action.data.response.forEach(this.add.bind(this))
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_START:
                    this.getById(data.args[0]).loadingComments = true
                    this.emitChange()
                    break;

                case LOAD_COMMENTS_SUCCESS:
                case LOAD_ARTICLES_FAIL:
                    AppDispatcher.waitFor([this.stores.comments.dispatchToken])
                    this.getById(data.args[0]).loadingComments = false
                    this.emitChange()
                    break;

            }
        })
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) loadArticles()
        return this.getAll()
    }
}

export default ArticleStore