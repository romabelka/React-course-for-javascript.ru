import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect((state) => {
    const { articles, router } = state
    return { articles, router }
})(ArticleList)