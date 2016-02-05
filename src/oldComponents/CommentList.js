import React, { PropTypes } from 'react'
import ToggleOpen from '../mixins/ToggleOpen'
import linkedState from 'react-addons-linked-state-mixin'
import {addComment, deleteComment, loadComments} from '../actions/commentActions'

const CommentList = React.createClass({
    mixins: [ToggleOpen, linkedState],
    contextTypes: {
        user: PropTypes.object
    },

    propTypes: {
        article: PropTypes.object
    },
    getInitialState() {
        return {
            newComment: ''
        }
    },

    componentWillUpdate(newProps, newState) {
        if (!newState.isOpen) return;
        const comments = newProps.article.getRelation('comments');
        const isLoaded = comments.every(comment => Object.keys(comment).length > 2)
        if (!isLoaded && !newProps.article.loadingComments) loadComments(newProps.article.id)
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
        if (!this.state.isOpen) return null;
        if (this.props.article.loadingComments) return <h3>Loading comments...</h3>

        const comments = this.props.article.getRelation('comments').map((comment) => {
            if (!comment.text) return null
            return <li key = {comment.id}>{comment.text} <b> by {comment.author}</b>
                <a href = "#" onClick = {this.deleteComment(comment.id)} >delete</a>
            </li>
        })
        comments.push(<li key = 'new_comment'>
            <input valueLink = {this.linkState("newComment")}/>
            <a href = "#" onClick={this.addComment}>add comment</a>
        </li>)

        return <ul>{comments}</ul>
    },

    addComment(ev) {
        ev.preventDefault()
        addComment(this.props.article.id, this.state.newComment, this.context.user ? this.context.user.name : null)
    },

    deleteComment(id) {
        return (ev) => {
            ev.preventDefault()
            deleteComment(id, this.props.article.id)
        }
    }
});

export default CommentList