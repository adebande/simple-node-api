const express = require('express')
const app = express()
const names = require('./names.json')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/names', (req,res) => {
    res.status(200).json(names)
})

app.post('/names', (req,res) => {
    names.push({'name':req.query.name})
    res.status(200).json(names)
})


app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
})

module.exports = app