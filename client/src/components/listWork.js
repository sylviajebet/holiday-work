import React, { Fragment, useEffect, useState } from "react";

import EditWork from "./editWork";

const ListWork = () => {

    const [ work, setWork] = useState([]);

    //delete work function

    const deleteWork = async (id) => {
        try {
          const deleteWork = await fetch(`http://localhost:5000/work/${id}`, {
          method: "DELETE"
        });

          setWork(work.filter(workk => workk.work_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getWork = async () => {
        try {

            const response = await fetch("http://localhost:5000/work");
            const jsonData = await response.json();
            
            setWork(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getWork();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Subject</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {/*<tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                {work.map(workk => (
                    <tr key={workk.work_id}>
                        <td>{workk.subject}</td>
                        <td>
                            <EditWork workk={workk} />
                        </td>
                        <td><button className="btn btn-danger" onClick={() => deleteWork(workk.work_id)}>Delete</button></td>
                    </tr>
                 ))

                }
            </tbody>
        </table>
        </Fragment>
    );
};

export default ListWork;