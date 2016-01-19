import { EventEmitter } from 'events'
import AppDispatcher from '../Dispatcher'
const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'

class Store extends EventEmitter {
    constructor() {
        super()
        this.__incrementalID = 999
        this.items = []
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

export default Store