import React from 'react'
import { Route } from 'react-router'
import ArticleList from './containers/ArticleList'
import NewArticle from './containers/NewArticle'
import Counter from './containers/Counter'
import App from './containers/App'

export default (
    <Route path = "/" component = {App}>
        <Route path = "/articles" component = {ArticleList} />
        <Route path = "/articles/new" component = {NewArticle} />
        <Route path = "/counter" component = {Counter}/>
    </Route>
)