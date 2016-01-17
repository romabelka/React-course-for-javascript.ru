import React, { PropTypes } from 'react'
import ToggleOpen from '../mixins/ToggleOpen'

const CommentList = React.createClass({
    mixins: [ToggleOpen],

    propTypes: {
        comments: PropTypes.array
    },

    render: function() {
        const { comments } = this.props
        if (!comments) return null
        return (
            <div>
                <a href = "#" onClick = {this.toggleOpen}>comments: {comments.length}</a>
                {this.getBody()}
            </div>
        )
    },

    getBody() {
        const comments = this.props.comments.map((comment) => {
            return <li key = {comment.id}>{comment.text} <b> by {comment.author}</b></li>
        })
        return this.state.isOpen ? (
            <ul>{comments}</ul>
        ) : null
    }
});

export default CommentList