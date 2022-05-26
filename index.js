const express = require('express')
const app = express()
const mongoose = require('mongoose');

const Name= require('./models/name.js')

mongoose.connect('mongodb://localhost:27017/name', {useNewUrlParser: true, useUnifiedTopology: true});

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


app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
})