import React, { Component, PropTypes } from 'react'
import Article from './Article'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const { articles } = this.props
        if (!articles.length) return <h3>No articles</h3>
        const articleItems = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>)
        return (
            <div>
                <ul>{articleItems}</ul>
            </div>
        )
    }
}

export default ArticleList