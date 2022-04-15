import React, { Fragment, useState } from "react";

const EditWork = ({ workk }) => {
    const [subject, setSubject] = useState(workk.subject);

    return (
        <Fragment>
        <button type="button" 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${workk.work_id}`}
            >

            Edit
        </button>

        {/* 
            id = id10
        */}
        <div class="modal" id={`id${workk.work_id}`}>
        <div class="modal-dialog">
            <div class="modal-content">

            <div class="modal-header">
                <h4 class="modal-title">Edit Work</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div class="modal-body">
                <input type="text" className="form-control" value={subject} />
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

            </div>
        </div>
        </div>
        </Fragment>
    )
};

export default EditWork;
