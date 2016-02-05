import React, { Component, PropTypes } from 'react'
import { comments } from '../stores'
import Select from 'react-select'
import { uniq } from 'lodash'

require('react-select/dist/react-select.min.css')
class AllComments extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            comments: comments.getOrLoadAll(),
            user: undefined
        }
    }

    componentDidMount() {
        comments.addListener(this.changeState)
    }

    componentWillUnmount() {
        comments.removeChangeListener(this.changeState)
    }

    componentWillReceiveProps(newProps) {
        this.changeState(newProps)
    }

    render() {
        const { comments, user } = this.state
        if (!comments || !comments.length) return <h3>Loading...</h3>
        const users = uniq(comments.map(comment => comment.user))
        const options = users.map((name) => {
            return {
                label: name,
                value: name
            }
        })

        const commetList = comments
            .filter((comment) => !user || comment.user == user)
            .map((comment) => {
                return <li key = {comment.id}>{comment.text} <b> by {comment.user}</b></li>
            })
        return (
            <div>
                <Select
                    options = {options}
                    multi = {false}
                    onChange = {this.selectUser}
                    value = {user}
                />
                <ul>{commetList}</ul>
            </div>
        )
    }

    selectUser = (user) => {
        this.setState({ user })
    };

    changeState = (props) => {
        this.setState({
            comments: comments.getOrLoadAll()
        })
    };
}

export default AllComments