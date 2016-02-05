import linkedState from 'react-addons-linked-state-mixin'
import { addArticle } from '../actions/articleActions'
import React from 'react'

const NewArticle = React.createClass({
    mixins: [linkedState],
    getInitialState() {
        return {
            newTitle: ''
        }
    },
    render: function() {
        return (
            <div>
                <input valueLink = {this.linkState("newTitle")}/>
                <a href = "#" onClick = {this.addArticle}>Add new Article</a>
            </div>

        )
    },
    addArticle(ev) {
        ev.preventDefault()
        addArticle({
            title: this.state.newTitle
        })
    }
});

export default NewArticle