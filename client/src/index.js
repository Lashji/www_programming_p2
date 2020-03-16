import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './app/AppContainer';
import * as serviceWorker from './serviceWorker';

import thunk from "redux-thunk";
import {
    createStore,
    applyMiddleware,
    compose,
} from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeEnhancers(middleware));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
