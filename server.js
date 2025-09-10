require('dotenv').config()
const express = require('express')
const PORT = 1234
const app = express()
const mongoose = require('mongoose')
const DB = process.env.DB_URI



mongoose.connect(DB).then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`); 
})
}).catch((error)=>{
    console.log("error connecting to database ",error.message);
    
})