const express = require('express')
const app = express()
const mongoose = require('mongoose');

const Name= require('./models/name.js')

require("dotenv").config();
const dbconfig= require('./config/db.config')

mongoose.connect(dbconfig.url);

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongoose")
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/names', (req,res) => {
    Name.find(function(err, names){
        if (err){
            res.send(err); 
        }
        res.status(200).json(names); 
    })
})

app.post('/names', (req,res) => {
    var name = new Name();
      name.name = req.query.name;
      name.save(function(err){
        if(err){
          res.send(err);
        }
        res.status(200).json(name); 
      })
})

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log('Listening on http://localhost:'+ PORT)
})