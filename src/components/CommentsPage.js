import React, { Component, PropTypes } from 'react'
import { comments } from '../stores'

class CommentsPage extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            comments: comments.getOrLoadForPage(this.props.params.num)
        }
    }

    componentDidMount() {
        comments.addListener(this.changeState)
    }

    componentWillUnmount() {
        comments.removeListener(this.changeState)
    }

    componentWillReceiveProps(newProps) {
        this.changeState(newProps)
    }

    render() {
        const { comments } = this.state
        if (!comments || !comments.length) return <h3>Loading...</h3>
        const commetList = comments.map((comment) => {
            return <li key = {comment.id}>{comment.text}</li>
        })
        return (
            <ul>{commetList}</ul>
        )
    }

    changeState = (props) => {
        this.setState({
            comments: comments.getOrLoadForPage((props || this.props).params.num)
        })
    };
}

export default CommentsPage