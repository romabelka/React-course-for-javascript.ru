import React, { Component, PropTypes } from 'react'
import NewArticle from '../components/NewArticle'
import { Link } from 'react-router'

class NewArticleContainer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Create new Article</h1>
                <Link to="/articles">Go home</Link>
                <NewArticle />
            </div>
        )
    }
}

export default NewArticleContainer