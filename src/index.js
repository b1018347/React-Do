import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initalState = {
    todos: []
};

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initalState;
const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware()));

store.subscribe( () => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
