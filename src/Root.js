import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import App from './App'
import UsersList from './Components/UsersList'
import StudentProfile from './StudentProfile'

class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="" component={App} />
                    <Route path="/students" component={UsersList} />
                    <Route path="/student/new" component={StudentProfile} />
                </div>
            </Router>
        )
    }
}

export default Root
