import React from 'react'
export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },
    toggleOpen(ev) {
        if (ev) ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}