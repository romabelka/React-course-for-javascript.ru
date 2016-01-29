import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { comments } from '../stores'

class CommentIndex extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            totalComments: comments.getTotalComments() || -1
        }
    }

    componentDidMount() {
        comments.addListener(this.changeState)
    }

    componentWillUnmount() {
        comments.removeChangeListener(this.changeState)
    }

    render() {
        const totalComments = Math.floor(this.state.totalComments / 10) + 1
        const links = Array.apply(null, Array(totalComments)).map((el, index) => {
            return <li key = {index}><Link to={`/comments/${index + 1}`}>{index + 1}</Link></li>
        })
        return (
            <div>
                <h1>All comments</h1>
                {this.props.children}
                <ul>{links}</ul>
            </div>
        )
    }

    changeState = () => {
        this.setState({
            totalComments: comments.getTotalComments() || -1
        })
    }
}

export default CommentIndex