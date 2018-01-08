import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './Store/Reducers/Counter'
import resultReducer from './Store/Reducers/Result'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore( combineReducers({ctr: counterReducer, res: resultReducer}) )

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
