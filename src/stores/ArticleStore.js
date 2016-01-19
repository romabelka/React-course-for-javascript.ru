import { EventEmitter } from 'events'
import AppDispatcher from '../Dispatcher'
import { ADD_NEW_ARTICLE } from '../actions/constants'

const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'

class ArticleStore extends EventEmitter {
    constructor() {
        super()
        this.__incrementalID = 10
        this.items = [
            {
                title: 'My first article',
                text: 'Lorem Ipsum',
                id: 1,
                comments: [
                    {
                        id: 1,
                        text: 'some comment',
                        author: 'roma'
                    }
                ]
            },{
                title: 'Other Article',
                text: 'Some other text',
                id: 2
            }
        ]

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_NEW_ARTICLE:
                    this.add(Object.assign({
                        id: this.getIncrementalId()
                    },data.article))
                    break;
            }
        })
    }

    getIncrementalId() {
        return this.__incrementalID++
    }
    addListener(callback) {
        this.on(STORE_CHANGE_EVENT, callback)
    }

    removeListener(callback) {
        this.removeListener(STORE_CHANGE_EVENT, callback)
    }

    emitChange() {
        this.emit(STORE_CHANGE_EVENT)
    }

    getAll() {
        return this.items
    }

    add(item) {
        this.items.push(item)
        return item
    }
}

export default ArticleStore