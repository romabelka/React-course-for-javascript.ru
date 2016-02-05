import React, { Component, PropTypes } from 'react'
import Hint from '../oldComponents/Hint'

export default (Component) => {
    return class WithHint extends Component {
        constructor(...args) {
            super(...args)
            this.state = {
                x: undefined,
                y: undefined,
                text: undefined
            }
        }

        render() {
            return <Component {...{hint: this.getHint(), showHint: this.showHint, hideHint: this.hideHint}} {...this.props} />
        }

        showHint = (text) => {
            return (ev) => {
                const { left, bottom, width } = ev.target.getBoundingClientRect()
                const y = bottom
                const x = left

                this.setState({ text, x, y })
            }
        }

        hideHint = () => {
            this.setState({ text: undefined })
        }

        getHint() {
            return this.state.text ? <Hint {...this.state} /> : null
        }
    }
}