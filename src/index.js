import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
function loggerMiddleWare(store) {
  return function(next) {
    return function(action) {
      const result = next(action)
      console.log('middleware', store.getState());
      return result
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleWare,ReduxThunk))


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
