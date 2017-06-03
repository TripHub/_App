import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunkMiddleware from 'redux-thunk'
import reducer from './data/reducer'

export default (initialState) => {
  let middleware = [apiMiddleware, thunkMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(require('redux-logger').default)
  }
  return createStore(reducer, initialState, applyMiddleware(...middleware))
}
