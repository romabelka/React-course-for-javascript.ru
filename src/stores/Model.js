class Model {
    constructor(data, store) {
        Object.assign(this, data)
        this.__store = store
    }

    getStore() {
        return this.__store
    }
    getRelation(rel) {
        if (!Array.isArray(this[rel])) throw new Error('no such relation')
        return this[rel]
            .map((id) => this.getStore().stores[rel].getById(id))
    }
}

export default Model