import { combineReducers } from 'redux';
import * as acts from '../actions/index';

const defaultState = {
    requestData: false,
    students: {},
    student: {
        name: '',
        cls: '',
        section: '',
        grade: '',
        tutor: ''
    },
}

function studentReducer(state = defaultState, action) {
    switch(action.type) {
        case acts.REQUESTING_DATA:
            return Object.assign({}, state , {
                requestData: true,
            })
        case acts.RECEIVED_DATA:
            return Object.assign({}, state, {
                requestData: false,
                students: action.json,
            })
        case acts.UPDATE_STUDENT:
            return Object.assign({}, state, {
                student: action.student,
            })
        default:
            return state
    }
}


const StudentReducer = combineReducers({
    studentReducer,
})

export default StudentReducer