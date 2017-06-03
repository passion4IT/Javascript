import { combineReducers } from 'redux';
import * as acts from './actions/index';

const defaultState = {
    requestData: false,
    students: {},
}

function studentReducer(state = defaultState, action) {
    switch(action.type) {
        case acts.REQUESTING_DATA:
            return Object.assign({}, state.data)
        case acts.RECEIVED_DATA:
            return Object.assign({}, state.data)
        default:
            return state
    }
}




const StudentReducer = combineReducers({
    studentReducer,
})

export default StudentReducer