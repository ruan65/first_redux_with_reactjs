import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './Store/Reducers/Counter'
import resultReducer from './Store/Reducers/Result'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers(
  {
    ctr: counterReducer,
    res: resultReducer
  }
)

// Middleware

const logger = store => {
  return next => {
    return action => {
      console.log( '[Middleware] Dispatching', action )
      const result = next( action )
      console.log( '[Middleware] next state', store.getState() )
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers( applyMiddleware( logger ) )

const store = createStore( rootReducer, enhancer )

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
