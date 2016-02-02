import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

class Main extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>

                </div>
            </Provider>
        )
    }
}

export default Main