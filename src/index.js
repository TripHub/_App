import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'
import './index.css'

const styletron = new Styletron()

ReactDOM.render(
  <StyletronProvider styletron={styletron}>
    <App />
  </StyletronProvider>,
  document.getElementById('root')
)

registerServiceWorker()
