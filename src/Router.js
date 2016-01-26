import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Container from './components/Container'
import Article from './components/Article'

export default (
    <Router history = {createBrowserHistory()}>
        <Route path="/articles" component = {Container} >
            <Route path=":id" component={Article}/>
        </Route>
    </Router>
)
