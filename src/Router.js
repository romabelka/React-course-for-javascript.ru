import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Container from './components/Container'
import Article from './components/Article'
import ArticleIndex from './components/ArticleIndex'

export default (
    <Router history = {createBrowserHistory()}>
        <Route path="/articles" component = {Container} >
            <IndexRoute component={ArticleIndex} />
            <Route path=":id" component={Article}/>
        </Route>
    </Router>
)
