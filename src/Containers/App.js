import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStudents, resetForm } from '../actions/index'

class App extends Component {
    constructor(props) {
        super(props)
        this.addUser = this.addUser.bind(this)
    }

    componentDidMount() {
        const dispatch = this.props.dispatch
        dispatch(getStudents())
    }

    addUser() {
        const dispatch = this.props.dispatch
        dispatch(resetForm())
        this.props.history.push('/new/student')
    }

    render() {
        return (
            <div className="studentList">
                <button className="btn btn-success add-student" onClick={this.addUser}>
                    <span className="glyphicon glyphicon-plus"></span>
                    Student
                </button>

                <Link className="text-info pull-right text-center student-link" to='/students'>
                    <i className="fa fa-users" aria-hidden="true"></i>
                </Link>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        student: state.studentReducer,
        ownProps,
    }
}

export default connect(mapStateToProps)(App)
