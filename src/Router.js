import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Container from './components/Container'
import Article from './components/Article'
import ArticleIndex from './components/ArticleIndex'
import NotFound from './components/NotFound'
import NewArticle from './components/NewArticle'

export default (
    <Router history = {createBrowserHistory()}>
        <Route path="/articles" component = {Container} >
            <IndexRoute component={ArticleIndex} />
            <Route path="new" component={NewArticle} />
            <Route path=":id" component={Article}/>
        </Route>
        <Route path = "*" component={NotFound} />
    </Router>
)
