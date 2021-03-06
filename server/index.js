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

app.put("/work/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { subject } = req.body;
        const updateWork = await pool.query("UPDATE home_work SET subject = $1 WHERE work_id = $2",
        [subject, id]);

        res.json("Work was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete one work

app.delete("/work/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteWork = await pool.query("DELETE FROM home_work WHERE work_id = $1", [id]);

        res.json("Work was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

