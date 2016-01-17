import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import WithHint from '../HigherOrderComponents/WithHint'

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
            <Article article = {article} ref= {article.id.toString()} />
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