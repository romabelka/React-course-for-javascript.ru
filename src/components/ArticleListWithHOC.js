import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import WithHint from '../HigherOrderComponents/WithHint'
import { Link } from 'react-router'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const { articles, hint, showHint, hideHint } = this.props
        if (!articles.length) return <h3>No articles</h3>
        const articleItems = articles.map((article) => <li key = {article.id}
                                                           onMouseOver = {showHint(article.title)}
                                                           onMouseLeave = {hideHint}
        >
            <Link to={`/articles/${article.id}`} activeClassName="active">{article.title}</Link>
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
}

export default WithHint(ArticleList)