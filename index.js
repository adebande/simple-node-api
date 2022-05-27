const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Name= require('./models/name.js')
const dbconfig= require('./config/db.config')
require("dotenv").config();

//Connect to database
mongoose.connect(dbconfig.url);


//Check database connection
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongoose")
});


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Route to get all names
app.get('/names', (req,res) => {
    Name.find(function(err, names){
        if (err){
            res.send(err); 
        }
        res.status(200).json(names); 
    })
})


//Route to post a new name
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


//Listen on port 8080
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log('Listening on http://localhost:'+ PORT)
})