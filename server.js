require('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 1234;
const mongoose = require('mongoose');

const db_uri = process.env.DATABASE_URI

const app = express()
app.use(express.json());

mongoose.connect(db_uri).then(()=>{
    console.log('Connected to Database');
    app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})
}).catch((error) => {
    console.log('Error connecting to Database' + error.message);
    
})