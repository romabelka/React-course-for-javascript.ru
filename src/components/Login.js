import linkedState from 'react-addons-linked-state-mixin'
import { addUser } from '../actions/userActions'
import React from 'react'

const Login = React.createClass({
    mixins: [linkedState],
    getInitialState() {
        return {
            username: ''
        }
    },
    render: function() {
        return (
            <div>
                <input valueLink = {this.linkState("username")}/>
                <a href = "#" onClick = {this.addUser}> login</a>
            </div>

        )
    },
    addUser(ev) {
        ev.preventDefault()
        addUser({
            name: this.state.username
        })
    }
});

export default Login