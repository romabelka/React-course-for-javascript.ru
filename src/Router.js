import React from 'react'
import history from './history'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'
import Container from './components/Container'
import Article from './components/Article'
import ArticleIndex from './components/ArticleIndex'
import NotFound from './components/NotFound'
import NewArticle from './components/NewArticle'
import CommentIndex from './components/CommentIndex'
import AllComments from './components/AllComments'
import CommentsPage from './components/CommentsPage'
import Login from './components/Login'

import { users } from './stores'

export default (
    <Router history = {history}>
        <Route path="/" >
        <IndexRedirect to="/articles" />
        <Route path="/articles" component = {Container} >
            <IndexRoute component={ArticleIndex} />
            <Route path="new" component={NewArticle} onEnter = {checkAuth} />
            <Route path=":id" component={Article}/>
        </Route>
        <Route path = "/comments" component = {CommentIndex} >
            <IndexRoute component = {AllComments} />
            <Route path = ":num" component = {CommentsPage} />
        </Route>
        <Route path = "/login" component = {Login} />
        <Route path = "*" component={NotFound} />
        </Route>
    </Router>
)

function checkAuth(newState, replaceState) {
    if (!users.getUser()) replaceState(null, '/login')
}