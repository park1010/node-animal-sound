const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const q = req.params
    console.log(q)
    res.send(q.name)
})

app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q)
    res.send(q.id)
})

app.get('/qry/:id', function (req, res) {
    const q = req.query
    console.log(q)
})

app.get('/dog', function (req, res) {
    res.send('강아지')
})

app.get('/cat', function (req, res) {
    res.send('고영희')
})




app.listen(port)