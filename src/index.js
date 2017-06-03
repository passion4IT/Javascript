import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import StudentReducer from './reducers/index';
import Root from './Root';


let store = createStore(StudentReducer)

render(
    <Provider store={ store }>
              <Root />
    </Provider>,
    document.getElementById(root)
)