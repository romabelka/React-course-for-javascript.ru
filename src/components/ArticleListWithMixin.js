import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import WithHint from '../mixins/WithHint'

const ArticleList = React.createClass({
    mixins: [WithHint],
    propTypes: {
        articles: PropTypes.array.isRequired
    },

    render() {
        const { articles } = this.props
        if (!articles.length) return <h3>No articles</h3>
        const articleItems = articles.map((article) => <li key = {article.id}
                                                           onMouseOver = {this.showHint(article.title)}
                                                           onMouseLeave = {this.hideHint}
        >
            <Article article = {article} ref= {article.id.toString()} />
        </li>)
        return (
            <div>
                {this.getHint()}
                <ul>{articleItems}</ul>
            </div>
        )
    },

    componentDidMount() {
        console.log("I'm mounted")
        console.log(findDOMNode(this.refs["1"]))
    }
})

/*
class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const { articles } = this.props
        if (!articles.length) return <h3>No articles</h3>
        const articleItems = articles.map((article) => <li key = {article.id}>
            <Article article = {article} ref= {article.id.toString()} />
        </li>)
        return (
            <div>
                <ul>{articleItems}</ul>
            </div>
        )
    }

    componentDidMount() {
        console.log("I'm mounted")
        console.log(findDOMNode(this.refs["1"]))
    }
}

*/
export default ArticleList