import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import linkedState from 'react-addons-linked-state-mixin'

const Container = React.createClass({
    mixins: [linkedState],

    propTypes: {
        articles: PropTypes.array.isRequired
    },

    getInitialState: function() {
        return {
            inputVal: ''
        };
    },

    render() {
        return (
            <div>
                <input valueLink = {this.linkState("inputVal")}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
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
            inputVal: ''
        }
    }

    render() {
        return (
            <div>
                <input value = {this.state.inputVal} onChange = {this.handleChange}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    handleChange = (ev) => {
        this.setState({
            inputVal: ev.target.value
        })
    }
}
*/

export default Container
