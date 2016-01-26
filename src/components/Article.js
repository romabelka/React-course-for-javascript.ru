import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { articles } from '../stores'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    constructor(...args) {
        super(...args)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const article = articles.getById(this.props.params.id)
        return <h1>Article: {article.title}</h1>
/*
        const { article } = this.props
        if (!article) return <span>No article</span>
        const body = this.state.isOpen ? this.getBody() : null
        return (
            <div>
                <a href = "#" onClick = {this.handelClick}>{article.title}</a>
                {body}
            </div>
        )
*/
    }

    handelClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList article = {article} />
            </section>
        )
    }
}

export default Article