import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="studentList">
            <Link className="btn btn-success add-student" to='/student/new'>
                <span className="glyphicon glyphicon-plus"></span>
                Student
            </Link>

            <Link className="text-info pull-right" to='/students'>
                Show Users
            </Link>
        </div>
    )
  }
}

export default App
