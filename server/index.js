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

app.post("/work", (req, res) => {
    try {

        console.log(req.body);
        
    } catch (err) {
        console.error(err.message);
    }
});

//get all work

//get one work

//update one work

//delete one work

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

