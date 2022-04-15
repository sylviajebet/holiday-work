import React, { Fragment, useState } from "react";

const InputWork = () => {

    const [subject, setSubject] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { subject };
            const response = await fetch("http://localhost:5000/work", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Homework List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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
