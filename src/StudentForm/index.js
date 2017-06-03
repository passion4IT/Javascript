import React, { Component } from 'react'

class StudentForm extends Component{
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
            },
            error: {
                nameError: '',
                classError: '',
                sectionError: '',
                gradeError: '',
                tutorError: '',
            }
        }
        this.browseBack = this.browseBack.bind(this)
        this.updateErrorState = this.updateErrorState.bind(this)
        this.addUser = this.addUser.bind(this)
    }

    updateName(e) {
        let student = this.state.student
        student.name = e.target.value
        this.setState({student: student})
        this.updateErrorState('nameError')
    }

    updateClass(e) {
        let student = this.state.student
        student.cls = e.target.value
        this.setState({student: student})
        this.updateErrorState('classError')
    }

    updateSection(e) {
        let student = this.state.student
        student.section = e.target.value
        this.setState({student: student})
        this.updateErrorState('sectionError')
    }

    updateGrade(e) {
        let student = this.state.student
        student.grade = e.target.value
        this.setState({student: student})
        this.updateErrorState('gradeError')
    }

    updateTutor(e) {
        let student = this.state.student
        student.tutor = e.target.value
        this.setState({student: student})
        this.updateErrorState('tutorError')
    }

    browseBack() {
        this.props.history.push('/students')
    }

    updateErrorState(propName) {
        let fieldError = this.state.error
        fieldError[propName] = ''
        this.setState({error: fieldError})
    }

    validateForm() {
        const student = this.state.student
        let error = this.state.error
        if(student['name'] === '') {
            error.nameError = 'Name of student is required'
            this.setState({error: error})
        }
        else if (student.cls === '') {
            error.classError = 'Class is required'
            this.setState({error: error})
        }
        else if(student.section === '') {
            error.sectionError = 'Section of student is required'
            this.setState({error: error})
        }
        else if(student.grade === '') {
            error.gradeError = 'Grade is required'
            this.setState({error: error})
        }
        else if(student.tutor === '') {
            error.tutorError = 'Tutor for teacher is required'
            this.setState({error: error})
        }
        else if(student === {}) {
            error = {
                'nameError': 'Name of student is required',
                'classError': 'Class is required',
                'gradeError': 'Grade is required',
                'sectionError': 'Section of student is required',
                'tutorError': 'Tutor is required'
            }
            this.setState({error: error})
        }
        else {
            return true
        }
    }

    addUser() {
        this.validateForm()
        if(this.validateForm() === true) {
            console.log(this.state.student)
        }
        else {
            return
        }
    }

    render() {
        return (
            <form>
                <div className="row" >
                    <div className="col-xs-12 form-group">
                        <label htmlFor="name">Name of student </label>
                        <input type="text" className="form-control" value={this.state.student.name} onChange={e => this.updateName(e)} />
                        <p className="text-danger">{this.state.error.nameError}</p>
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="studentClass">Class </label>
                        <input type="text" className="form-control" value={this.state.student.cls} onChange={e => this.updateClass(e)} />
                        <p className="text-danger">{this.state.error.classError}</p>
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="section">Section</label>
                        <input type="text" className="form-control" value={this.state.student.section} onChange={e => this.updateSection(e)} />
                        <p className="text-danger">{this.state.error.sectionError}</p>
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="grade">Grade</label>
                        <input type="text" className="form-control" value={this.state.student.grade} onChange={e => this.updateGrade(e)} />
                        <p className="text-danger">{this.state.error.gradeError}</p>
                    </div>
                    <div className="col-xs-12 form-group">
                        <label htmlFor="tutor">Tutor</label>
                        <input type="text" className="form-control" value={this.state.student.tutor} onChange={e => this.updateTutor(e)} />
                        <p className="text-danger">{this.state.error.tutorError}</p>
                    </div>
                    <div className="col-xs-12 form-group">
                        <button className="btn btn-success" onClick={this.browseBack}>
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;
                            Back
                        </button>
                        <button type="button" className="btn btn-success pull-right" onClick={this.addUser}>
                            Submit &nbsp;
                            <span className="glyphicon glyphicon-ok"></span>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default StudentForm