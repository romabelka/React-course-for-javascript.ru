import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class CommentIndex extends Component {
    render() {
        return (
            <div>
                <h1>All comments</h1>
                {this.props.children}
            </div>
        )
    }
}

export default CommentIndex