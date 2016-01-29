import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_USER } from '../actions/constants'

class UserStore extends Store {
    constructor(...args) {
        super(...args)
        this.user = null

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_USER:
                    this.user = data.name
                    this.emitChange()
                    break
            }
        })
    }

    getUser() {
        return this.user
    }
}

export default UserStore