import fetch from 'isomorphic-fetch';

export const REQUESTING_DATA = 'REQUESTING_DATA'
export const RECEIVED_DATA = 'RECEIVED_DATA'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const RESET_FORM = 'RESET_FORM'

function requestStudents() {
    return {
        type: REQUESTING_DATA,
    }
}

function receivedStudents(json) {
    return {
        type: RECEIVED_DATA,
        json,
    }
}

export function updateStudent(student) {
    return {
        type: UPDATE_STUDENT,
        student,
    }
}

export function resetForm() {
    return {
        type: RESET_FORM,
    }
}

export function getStudents() {
    return function(dispatch) {
        dispatch(requestStudents())
        return fetch('http://localhost:3000/student.json')
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
            dispatch(receivedStudents(json.students))
        })
    }
}