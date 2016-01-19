import { EventEmitter } from 'events'
import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_ARTICLE } from '../actions/constants'

const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'

class ArticleStore extends Store {
    constructor() {
        super()
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
            }
        })
    }
}

export default ArticleStore