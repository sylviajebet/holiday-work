import React, { Fragment, useEffect, useState } from "react";

const ListWork = () => {

    const [ work, setWork] = useState([]);

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
                    <tr>
                        <td>{workk.subject}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                 ))

                }
            </tbody>
        </table>
        </Fragment>
    );
};

export default ListWork;