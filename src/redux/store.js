'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

export default (rootReducer) => {
    const middleware = []
    const enhancers = []

    middleware.push(thunkMiddleware)

    if (__DEV__) {
        middleware.push(logger)
    }

    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(rootReducer, compose(...enhancers))

    return store
}