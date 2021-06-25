//=============== MODULES IMPORT ==================
var express = require('express')
var bodyParser = require('body-parser')


//=============== APP CONFIG ======================
var app = express()
app.use(bodyParser.urlencoded({ extended: true }))


//=============== VIEW CONFIG ======================
app.use(express.static(__dirname));


//============== MIDDLEWARES CONFIG ================
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/sendMail', (req, res) => {
    
})

//================= SERVER LISTENER ================
var server = app.listen(process.env.PORT || 8080, () => {
    console.log('http://localhost:8080')
})