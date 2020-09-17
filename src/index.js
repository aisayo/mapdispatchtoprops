//root file 

//what do i need to import??
//append react element to the dom
// make react aware of store
//create the store

//libaries + methods
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//components or functions 
//react element => jsx/components <App />
import App from './App';
import { rootReducer } from './reducers/rootReducer'

//store state is dictated by reducer

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)