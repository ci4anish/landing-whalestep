const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 8008;



const express = require('express'),
    nodeMailer = require('nodemailer');

const app = express();
app.use(express.static(__dirname + ''));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(cors());

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port 8008!');
});

// http.createServer(function (request, response) {
//     console.log('request starting...');
//
//     let filePath = '.' + request.url;
//     if (filePath == '/')
//         filePath = '/index.html';
//
//     let extname = path.extname(filePath);
//     let contentType = 'text/html';
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//         case '.wav':
//             contentType = 'audio/wav';
//             break;
//     }
//
//     fs.readFile(filePath, function(error, content) {
//         if (error) {
//             if(error.code == 'ENOENT'){
//                 fs.readFile('./404.html', function(error, content) {
//                     response.writeHead(200, { 'Content-Type': contentType });
//                     response.end(content, 'utf-8');
//                 });
//             }
//             else {
//                 response.writeHead(500);
//                 response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
//                 response.end();
//             }
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
//         }
//     });
//
// }).listen(8000);

app.post('/send-email', async function (req, res) {

    let data = req.body;
    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: 'ci4anish@gmail.com',
            pass: ''
        }
    });

    let mailOptions = {
        from: data.email, // sender address
        to: 'ci4anish@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: `<b>${data.description}</b>` // html body
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        // res.render('index');
        res.json(info.response);
    });

});