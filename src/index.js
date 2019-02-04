import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import Root from './Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initalState = {
    todos: []
};    
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initalState;

ReactDOM.render(<Root initalState={persistedState}><App /></Root>, document.getElementById('root'));
registerServiceWorker();
