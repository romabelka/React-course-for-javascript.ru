import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render() {
        return (
            <div>
                {this.props.counter}
            </div>
        )
    }
}

export default connect((state) => {
    const { counter } = state
    return {
        counter
    }
})(Counter)