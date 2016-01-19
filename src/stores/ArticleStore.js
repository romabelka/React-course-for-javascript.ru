class ArticleStore {
    constructor() {
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