import React, { Component, PropTypes } from 'react'
import { comments } from '../stores'

class CommentsPage extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            comments: []
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.params.id}</h3>
            </div>
        )
    }
}

export default CommentsPage