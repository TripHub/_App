import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'
import { Provider } from 'react-redux'
import createStore from './store'
import './index.css'

export const store = createStore()
const styletron = new Styletron()

render(
  <StyletronProvider styletron={styletron}>
    <Provider store={store}>
      <App />
    </Provider>
  </StyletronProvider>,
  document.getElementById('root')
)
registerServiceWorker()
