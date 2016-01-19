import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

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
        const { article } = this.props
        if (!article) return <span>No article</span>
        const body = this.state.isOpen ? this.getBody() : null
        return (
            <div>
                <a href = "#" onClick = {this.handelClick}>{article.title}</a>
                {body}
            </div>
        )
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
                <CommentList comments = {article.getRelation('comments')} />
            </section>
        )
    }
}

export default Article