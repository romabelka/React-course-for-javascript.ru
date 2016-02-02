import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        return (
            <div>
                {this.props.counter}
                <a href = "#" onClick = {this.handleClick}>increment</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    };
}

export default connect((state) => {
    const { counter } = state
    return { counter }
}, {
    increment
})(Counter)