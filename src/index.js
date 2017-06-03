import React from 'react';
import thunkMiddleWare from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import StudentReducer from './reducers';
import Root from './Root';


let store = createStore(
    StudentReducer,
    applyMiddleware(
        thunkMiddleWare,
    )
)

render(
    <Provider store={ store }>
              <Root />
    </Provider>,
    document.getElementById('root')
)