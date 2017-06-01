import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'
import './index.css'

ReactDOM.render(
  <StyletronProvider styletron={new Styletron()}>
    <App />
  </StyletronProvider>,
  document.getElementById('root')
)

registerServiceWorker()
