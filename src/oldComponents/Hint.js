import React, { Component, PropTypes } from 'react'

const hintStyle = {
    backgroundColor: 'black',
    color: 'green',
    position: 'fixed'
}

class Hint extends Component {
    static propTypes = {
        text: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number
    }

    render() {
        const { text, x, y } = this.props
        return (
            <span style = {{...hintStyle, left: x, top: y}}>
                {text}
            </span>
        )
    }
}

export default Hint