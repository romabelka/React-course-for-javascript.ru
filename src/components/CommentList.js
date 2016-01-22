import React, { PropTypes } from 'react'
import ToggleOpen from '../mixins/ToggleOpen'
import linkedState from 'react-addons-linked-state-mixin'

const CommentList = React.createClass({
    mixins: [ToggleOpen, linkedState],

    propTypes: {
        article: PropTypes.object
    },
    getInitialState() {
        return {
            newComment: ''
        }
    },

    render: function() {
        const { article } = this.props
        if (!article || !article.getRelation('comments')) return null
        const comments = article.getRelation('comments')
        return (
            <div>
                <a href = "#" onClick = {this.toggleOpen}>comments: {comments.length}</a>
                {this.getBody()}
            </div>
        )
    },

    getBody() {
        const comments = this.props.article.getRelation('comments').map((comment) => {
            return <li key = {comment.id}>{comment.text} <b> by {comment.author}</b></li>
        })
        comments.push(<li key = 'new_comment'>
            <input valueLink = {this.linkState("newComment")}/>
            <a href = "#" onClick={this.addComment}>add comment</a>
        </li>)
        return this.state.isOpen ? (
            <ul>{comments}</ul>
        ) : null
    },

    addComment(ev) {
        ev.preventDefault()
        console.log('---', `adding comment: ${this.state.newComment} to ${this.props.article.id}`);
    }
});

export default CommentList