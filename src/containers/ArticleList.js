import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkAndLoadAllArticles, getRelation } from '../store/utils'

class ArticleList extends Component {
    static propTypes = {

    };

    componentDidMount() {
        checkAndLoadAllArticles()
    }

    render() {
        const { articles } = this.props
        if (articles.isLoading) return <h1>Loading...</h1>

        const articleList = articles.entities.map((article) => {
            return <li key = {article.id} >{article.title}</li>
        })

        //I want all comments of article with id == 2
        const article = articles.entities.filter(article => article.id == 2)[0]
        const comments = getRelation(article, 'comments').map(comment => <li key={comment.id}>{comment.text}</li>)
        return (
            <div>
                <ul>{articleList}</ul>
                <h3>comments</h3>
                <ul>{comments}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    const { articles, router } = state
    return { articles, router }
})(ArticleList)