'use strict';

const express = require('express');

const app = express()

app.use('/', (req, res, next) =>{
   
    let request = req.query;
    
    res.send(`lat = ${request.lat} y long = ${request.lon}`)
    console.log(`lat = ${request.lat} y long = ${request.lon}`);
    next();
  });

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tracker', (req,res) =>{
    // res.send("Hello Tracker");
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))