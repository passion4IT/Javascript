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

function addStudent(student, oldStudents) {
    let students = oldStudents
    students.push(student)
    return students
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
        case acts.RESET_FORM:
            return Object.assign({}, state, {
                student: defaultState.student,
            })
        case acts.ADD_NEW_STUDENT:
            return Object.assign({}, state, {
               students: addStudent(action.student, action.oldStudents)
        })
        default:
            return state
    }
}


const StudentReducer = combineReducers({
    studentReducer,
})

export default StudentReducer