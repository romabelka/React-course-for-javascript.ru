import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import User from './UserStore'
import Store from './Store'

let stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores),
    users: new User(stores)
})
export default stores