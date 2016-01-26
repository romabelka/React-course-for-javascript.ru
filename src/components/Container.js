import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleListWithHOC'
import { articles, comments } from '../stores'

const Container = React.createClass({
    getInitialState: function() {
        return {
            articles: articles.getOrLoadAll(),
            loading: articles.loading
        };
    },

    componentDidMount() {
        articles.addListener(this.articlesChange)
        comments.addListener(this.articlesChange)
    },

    componentWillUnmount() {
        articles.removeListener(this.articlesChange)
        comments.removeListener(this.articlesChange)
    },

    render() {
        const { articles, loading } = this.state
        if (loading) return <h1>LOADING...</h1>
        return (
            <div>
                <ArticleList articles = {articles} />
                {this.props.children}
            </div>
        )
    },

    articlesChange() {
        this.setState({
            articles: articles.getOrLoadAll(),
            loading: articles.loading
        })
    }
})

/*
class Container extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    constructor() {
        super()
        this.state = {
            newTitle: ''
        }
    }

    render() {
        return (
            <div>
                <input value = {this.state.newTitle} onChange = {this.handleChange}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    handleChange = (ev) => {
        this.setState({
            newTitle: ev.target.value
        })
    }
}
*/

export default Container
