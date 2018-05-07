import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootStore from './store';
import rootSaga from './sagas';
import './less/index.less';
const rootEl = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
// import Loadable from 'react-loadable';
//
// const LoadableComponent = Loadable({
//     loader: () => import('./Counter'),
//     loading: () => {return <div>loading</div>},
// });
const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootEl
    );

render();
store.subscribe(render);
