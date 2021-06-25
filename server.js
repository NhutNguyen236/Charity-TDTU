//=============== MODULES IMPORT ==================
var express = require('express')
var bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');


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
    var messageBody = {
        subject: req.body.subject,
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        content: req.body.message
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'phamp9331@gmail.com',
            pass: '@Phongenter212123'
        }
    });

    // Send to client a waiting email
    transporter.use('compile', hbs({
        viewEngine: {
            defaultLayout: false,
            extName: 'express-handlebars'
        },
        viewPath: './'
    }));

    // Send placeholding email to client
    let mailOptionsClient = {
        from: 'phamp9331@gmail.com',
        to: messageBody.email,
        subject: '💓 Cảm ơn vì đã giữ liên lạc với chúng tôi 💓',
        template: 'email',
        context: {
            name: messageBody.name
        } // send extra values to template
    };

    transporter.sendMail(mailOptionsClient, (err, data) => {
        var msg = undefined
        if (err) {
            console.log(err)
            msg = 'We are facing some technical difficulties here, come back later 😥'
            res.send(msg)
        }
        msg = 'OK'
        res.send(msg)
    });
})

//================= SERVER LISTENER ================
var server = app.listen(process.env.PORT || 8080, () => {
    console.log('http://localhost:8080')
})