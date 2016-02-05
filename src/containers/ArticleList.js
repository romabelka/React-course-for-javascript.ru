import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllArticles } from '../AC/articles'

class ArticleList extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const { articles } = this.props
        if (articles.isLoading) return <h1>Loading...</h1>

        const articleList = articles.entities.map((article) => {
            return <li key = {article.id} >{article.title}</li>
        })
        return (
            <div>
                <ul>{articleList}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    const { articles, router } = state
    return { articles, router }
}, {
    loadAllArticles
})(ArticleList)