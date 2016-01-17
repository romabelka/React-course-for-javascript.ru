import React from 'react'
import Hint from '../components/Hint'

export default {
    getInitialState() {
        return {
            x: undefined,
            y: undefined,
            text: undefined
        }
    },
    hideHint() {
        this.setState({ text: undefined })
    },
    showHint(text) {
        return (ev) => {
            const { left, bottom, width } = ev.target.getBoundingClientRect()
            const y = bottom
            const x = left

            this.setState({ text, x, y })
        }
    },
    getHint() {
        return this.state.text ? <Hint {...this.state} /> : null
    }
}