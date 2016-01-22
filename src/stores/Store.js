import { EventEmitter } from 'events'
import AppDispatcher from '../Dispatcher'
import Model from './Model'
const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'

class Store extends EventEmitter {
    constructor(stores, initalState) {
        super()
        this.stores = stores
        this.__incrementalID = 999
        this.items = []
        if (initalState) initalState.forEach(this.add.bind(this))
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
        return this.items.slice()
    }

    getById(id) {
        return this.items.filter((item) => item.id == id)[0]
    }

    delete(id) {
        this.items = this.items.filter((item) => item.id != id)
    }

    add(item) {
        const el = new Model(item, this)
        this.items.push(el)
        return el
    }
}

export default Store