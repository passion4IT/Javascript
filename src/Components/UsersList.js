import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProcessingRequest from './Processing'
import StudentRow from './StudentRow'
import TableHeader from './TableHeader'
import { getStudents } from '../actions/index'

class UsersList extends Component {
    componentDidMount() {
        const dispatch = this.props.dispatch
        dispatch(getStudents())
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
                        classOfStudent={students[student].cls}
                        section={students[student].section}
                        grade={students[student].grade}
                        key={student}
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