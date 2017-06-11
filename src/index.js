import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'
import { Provider } from 'react-redux'
import createStore from './store'
import './assets/index.css'

export const store = createStore()
const styletron = new Styletron()

render(
  <Provider store={store}>
    <Router>
      <StyletronProvider styletron={styletron}>
        <App />
      </StyletronProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
