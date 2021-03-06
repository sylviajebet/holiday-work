import React, { Fragment, useState } from "react";

const EditWork = ({ workk }) => {
    const [subject, setSubject] = useState(workk.subject);

    //edit subject function
    const updateWork = async (e) => {
        e.preventDefault();
        try {
            const body = { subject };
            const response = await fetch(`http://localhost:5000/work/${workk.work_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

                window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

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
        <div class="modal" id={`id${workk.work_id}`} onClick={() => setSubject(workk.subject)}>
        <div class="modal-dialog">
            <div class="modal-content">

            <div class="modal-header">
                <h4 class="modal-title">Edit Work</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={() => setSubject(workk.subject)}>&times;</button>
            </div>

            <div class="modal-body">
                <input type="text" className="form-control" value={subject} onChange={e => setSubject(e.target.value)}/>
            </div>

            <div class="modal-footer">

                <button type="button" 
                        class="btn btn-warning" data-dismiss="modal"
                        onClick = {e => updateWork(e)}
                        >
                    Edit
                </button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setSubject(workk.subject)}>Close</button>
            </div>

            </div>
        </div>
        </div>
        </Fragment>
    )
};

export default EditWork;
