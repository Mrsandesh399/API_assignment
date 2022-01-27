const express = require("express");
// const mongoose = require("mongoose");
const PORT = 5555;
const app = express();
const connectDB = require("./config/db");
// const router = require("./routes/employeeRoutes");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDB();

const employeeRoutes=require('./routes/employeeRoutes');
app.use("/api",employeeRoutes)

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Working on port : ${PORT}`)
})