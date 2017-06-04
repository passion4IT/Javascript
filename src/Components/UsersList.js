import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProcessingRequest from './Processing'
import StudentRow from './StudentRow'
import TableHeader from './TableHeader'
import { updateStudent } from '../actions/index'

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.userProfile = this.userProfile.bind(this)
    }

    userProfile(e) {
        const studentId = e.target.getAttribute('data-id')
        const students = this.props.students
        const dispatch = this.props.dispatch
        dispatch(updateStudent(students[studentId]))
        this.props.history.push(`/student/${studentId}`)
    }

    render() {
        const {students, requestData } = this.props
        return (
            <div className="studentList">
                <TableHeader />
                {requestData && <ProcessingRequest/>}
                {!requestData &&
                Object.keys(students).map(student => (
                    <StudentRow
                        name={students[student].name}
                        studentId={student}
                        classOfStudent={students[student].cls}
                        section={students[student].section}
                        grade={students[student].grade}
                        key={student}
                        userProfile = {this.userProfile}
                    />
                ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.studentReducer
}

export default connect(mapStateToProps)(UsersList)