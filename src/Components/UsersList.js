import React, { Component } from 'react'
import $ from 'jquery'
import ProcessingRequest from './Processing'
import StudentRow from './StudentRow'
import TableHeader from './TableHeader'

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: {},
        }
        this.getStudentData = this.getStudentData.bind(this)
    }

    getStudentData() {
        $.get({
            url: 'http://localhost:3000/student.json',
            method: 'GET'
        })
            .done((response) => {
                this.setState({list: response.students})
            })
    }

    componentDidMount() {
        this.getStudentData()
    }

    render() {
        const students = this.state.list
        return (
            <div className="studentList">
                <TableHeader />
                {!students && <ProcessingRequest/>}
                {students &&
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

export default UsersList