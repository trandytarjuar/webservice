const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const mongodb = require('mongoose');

const usersRouter = require('./router/usersRouter');

dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)

mongodb.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
    }).then(connection =>{
    console.log("Koneksi Berhasil")
    
    })

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log( " tambah timestamp")
    req.requestTime = new Date().toISOString();
    next();
})

app.use('/users',usersRouter);

app.listen(port,()=>{
    console.log("server siapp")
})