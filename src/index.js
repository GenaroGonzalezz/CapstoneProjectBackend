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
    res.send("Welcome to kinda CLONEFLIX");
})

app.use("/movies", moviesRouter);

const dburl = 'mongodb+srv://capstone-user:47hCv55EwEzvc5TJ@moviesdb.otbyvlg.mongodb.net/movie-catalog?retryWrites=true&w=majority';
const connectDb = () => {
    mongoose.set('strictQuery', true);

    mongoose.connect(dburl);
    console.log("Database connected");


}


const server = app.listen(port, () => {
    console.log(`Server is running in port ${port} `);
    connectDb();
});


module.exports = { app, server };