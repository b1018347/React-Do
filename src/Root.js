import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
const Root = (props) => {
    const store = createStore(reducer, props.initalState);
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default Root;