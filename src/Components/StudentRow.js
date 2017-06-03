import React from 'react'

const StudentRow = ({name, classOfStudent, section, grade, studentId, userProfile}) => (
    <div className="row student-info">
        <div className="col-xs-6 col-sm-3 text-info" data-id={studentId} onClick={e => userProfile(e)}>
            {name}
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
            {classOfStudent}
        </div>
        <div className="hidden-xs col-sm-3 text-warning text-center">
            {section}
        </div>
        <div className="hidden-xs col-sm-3 text-success text-center">
            {grade}
        </div>
    </div>
)

export default StudentRow