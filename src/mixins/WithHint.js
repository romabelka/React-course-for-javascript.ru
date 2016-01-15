import React from 'react'

export default {
    getInitialState() {
        return {
            hint: 'new hint'
        }
    },
    componentDidMount() {

    },
    getHint() {
        return <span>{this.state.hint}</span>
    }
}