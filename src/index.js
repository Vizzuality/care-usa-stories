import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import router from './router';
import * as reducers from 'store';

import 'slick-carousel/slick/slick.css';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers({
  ...reducers,
  location: router.reducer
});

const store = createStore(
  reducer,
  compose(
    router.enhancer,
    applyMiddleware(thunk, router.middleware),
    /* Redux dev tool, install chrome extension in
     * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en */
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);


ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
