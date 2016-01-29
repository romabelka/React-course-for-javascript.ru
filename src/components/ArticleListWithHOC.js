import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import WithHint from '../HigherOrderComponents/WithHint'
import { Link } from 'react-router'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    static contextTypes = {
        history: PropTypes.object
    }

    render() {
        const { articles, hint, showHint, hideHint } = this.props
        if (!articles.length) return <h3>No articles</h3>
        const articleItems = articles.map((article) => <li key = {article.id}
                                                           onMouseOver = {showHint(article.title)}
                                                           onMouseLeave = {hideHint}
        >
            <h3 onClick = {this.redirect(article.id)}>{article.title}</h3>
        </li>)
        return (
            <div>
                {hint}
                <ul>{articleItems}</ul>
            </div>
        )
    }

    componentDidMount() {
        console.log("I'm mounted")
    }

    redirect(id) {
        return function () {
            this.context.history.pushState(null, `/articles/${id}`)
        }.bind(this)
    }
}

export default WithHint(ArticleList)