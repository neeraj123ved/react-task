import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducer from './reducer'
import { promiseMiddleware, localStorageMiddleware } from './middleware'

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
  const defaultMiddleware = [
    promiseMiddleware,
    localStorageMiddleware,
    appRouterMiddleware
  ]
  if (process.env.NODE_ENV !== 'production') {
    defaultMiddleware.push(createLogger())
  }
  return applyMiddleware.apply(null, defaultMiddleware)
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()))
