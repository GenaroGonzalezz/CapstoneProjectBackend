const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();

const moviesRouter = require("./routes/movies");


const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to CLONEFLIX");
})

app.use("/movies", moviesRouter);


const connectDb = () => {
    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.DB_STRING);
    console.log("Database connected");


}


const server = app.listen(port, () => {
    console.log(`Server is running in port ${port} `);
    connectDb();
});


module.exports = { app, server };