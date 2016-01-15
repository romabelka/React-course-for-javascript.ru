import React from 'react'
import {render} from 'react-dom'
import Container from './components/Container'
import articles from './fixtures'

render(<Container articles = {articles}/>, document.getElementById('container'))