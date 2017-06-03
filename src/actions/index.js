import fetch from 'isomorphic-fetch';

export const REQUESTING_DATA = 'REQUESTING_DATA'
export const RECEIVED_DATA = 'RECEIVED_DATA'

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