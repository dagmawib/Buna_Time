const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const { error } = require("console");


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));


mongoose.connect("mongodb://localhost:27017/buna-time", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to Database.")
}).catch(error => console.error(error));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/', 'index.html'));
})


app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})