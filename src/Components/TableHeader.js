import React from 'react'

const TableHeader = () => (
    <div className="row alert-warning table-header">
        <div className="col-xs-6 col-sm-3 text-info">
            Name
        </div>
        <div className="col-xs-6 col-sm-3 text-info text-center">
            Class
        </div>
        <div className="hidden-xs col-sm-3 text-info text-center">
            Section
        </div>
        <div className="hidden-xs col-sm-3 text-info text-center">
            Grade
        </div>
    </div>
)

export default TableHeader