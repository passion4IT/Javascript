import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'
import App from './Containers/App'
import UsersList from './Components/UsersList'
import StudentForm from './StudentForm/index'

class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="" component={App} />
                    <Route path="/students" component={UsersList} />
                    <Route path="/student/new" component={StudentForm} />
                    <Redirect from="" exact to="/students" />
                </div>
            </Router>
        )
    }
}

export default Root
