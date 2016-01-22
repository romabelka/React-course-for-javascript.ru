import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import Store from './Store'

const articles = [
    {
        title: 'My first article',
        text: 'Lorem Ipsum',
        id: 1,
        comments: [1]
    },{
        title: 'Other Article',
        text: 'Some other text',
        id: 2,
        comments: []
    }
]

const comments = [
    {
        id: 1,
        text: 'some comment'
    }
]

let stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores, articles),
    comments: new CommentStore(stores, comments)
})
export default stores