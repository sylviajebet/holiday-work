import React, { Fragment, useState } from "react";

const InputWork = () => {

    const [subject, setSubject] = useState("")

    return (
        <Fragment>
            <h1 className="text-center mt-5">Homework List</h1>
            <form className="d-flex mt-5">
                <input 
                    type="text" 
                    className="form-control" 
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputWork;
