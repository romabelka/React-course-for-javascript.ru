import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'

class Main extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <ReduxRouter />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Main