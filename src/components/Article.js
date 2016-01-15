import React, { Component, PropTypes } from 'react'

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
        if (!this.props.article) return <span>No article</span>
        const { text, title } = this.props.article
        const body = this.state.isOpen ? <section>{text}</section> : null
        return (
            <div>
                <a href = "#" onClick = {this.handelClick}>{title}</a>
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
}

export default Article