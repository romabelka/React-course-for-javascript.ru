import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import DevTools from './DevTools'

class Main extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <Counter />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Main