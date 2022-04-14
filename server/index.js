const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//const pg = require('pg');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create one work

app.post("/work", async (req, res) => {
    try {

        const { subject } = req.body;
        const newWork = await pool.query(
            "INSERT INTO home_work (subject) VALUES ($1) RETURNING * ",
            [subject]
        );
        
        res.json(newWork.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all work

app.get("/work", async (req, res) => {
    try {
        const allWork = await pool.query("SELECT * FROM home_work");
        res.json(allWork.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get one work

app.get("/work/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const oneWork = await pool.query("SELECT * FROM home_work WHERE work_id = $1",
        [id]);
        res.json(oneWork.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update one work

//delete one work

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

