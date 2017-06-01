import React, { Component } from 'react'

class StudentProfile extends Component{
    constructor(props) {
        super(props)
        this.updateName = this.updateName.bind(this)
        this.updateClass = this.updateClass.bind(this)
        this.updateSection = this.updateSection.bind(this)
        this.updateGrade = this.updateGrade.bind(this)
        this.updateTutor = this.updateTutor.bind(this)
        this.state = {
            student: {
                name: '',
                cls: '',
                section: '',
                grade: '',
                tutor: ''
            }
        }
    }

    updateName(e) {
        let student = this.state.student
        student.name = e.target.value
        this.setState({student: student})
    }

    updateClass(e) {
        let student = this.state.student
        student.cls = e.target.value
        this.setState({student: student})
    }

    updateSection(e) {
        let student = this.state.student
        student.section = e.target.value
        this.setState({student: student})
    }

    updateGrade(e) {
        let student = this.state.student
        student.grade = e.target.value
        this.setState({student: student})
    }

    updateTutor(e) {
        let student = this.state.student
        student.tutor = e.target.value
        this.setState({student: student})
    }

    render() {
        return (
            <form>
                <div className="row" >
                    <div className="col-xs-12 form-group">
                        <label htmlFor="name">Name of student </label>
                        <input type="text" className="form-control" value={this.state.student.name} onChange={e => this.updateName(e)} />
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="studentClass">Class </label>
                        <input type="text" className="form-control" value={this.state.student.cls} onChange={e => this.updateClass(e)} />
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="section">Section</label>
                        <input type="text" className="form-control" value={this.state.student.section} onChange={e => this.updateSection(e)} />
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="grade">Grade</label>
                        <input type="text" className="form-control" value={this.state.student.grade} onChange={e => this.updateGrade(e)} />
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="tutor">Tutor</label>
                        <input type="text" className="form-control" value={this.state.student.tutor} onChange={e => this.updateTutor(e)} />
                    </div>
                    <div className="col-xs-12 form-group">
                        <button className="btn btn-success pull-right">
                            Submit &nbsp;
                            <span className="glyphicon glyphicon-ok"></span>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default StudentProfile