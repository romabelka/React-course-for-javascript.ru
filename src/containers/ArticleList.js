import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {

    };

    render() {
        const articles = this.props.articles.map((article) => {
            return <li key = {article.id} >{article.title}</li>
        })
        return (
            <div>
                <ul>{articles}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    const { articles, router } = state
    return { articles, router }
})(ArticleList)