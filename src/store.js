import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunkMiddleware from 'redux-thunk'
import reducer from './data/reducer'

export default (initialState) => {
  let middleware = [apiMiddleware, thunkMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(require('redux-logger').default)
  }
  return createStore(
    reducer,
    /* for redux dev-tools, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  )
}
