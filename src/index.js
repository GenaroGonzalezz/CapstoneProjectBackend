const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const moviesRouter = require("./routes/movies");


const app = express();
const port = 2000;



app.get("/", (req, res) => {
    res.send("Alo");
})

app.use("/movies", moviesRouter);


const connectDb = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.DB_STRING);
        console.log("Database connected");
    }
    catch (error) { 
        console.log('===========================Fallo de conexión========================')
        console.log(error);
    }
}


app.listen(port, async () => {
    console.log(`Server is running in port ${port} `);
    await connectDb();
});


