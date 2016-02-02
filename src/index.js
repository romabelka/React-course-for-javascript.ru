import {render} from 'react-dom'
import store from './store'
import Root from './containers/Root'
import React from 'react'

render(<Root store = {store} />, document.getElementById('container'))