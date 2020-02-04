const bodyParser = require('body-parser');
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

app.post('/send-email', async function (req, res) {

    let data = req.body;
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'ci4anish@gmail.com',
            clientId: '121550933080-ajh7815vsmad01f47aelks1kbkd7lpva.apps.googleusercontent.com',
            clientSecret: 'Ge3BxKVuvYr7887zUFtk786D',
            refreshToken: '1//042BkrHXSaXbbCgYIARAAGAQSNwF-L9IrGSQjVZY3I8M7lMqFp8VXzXqtyP4vfODHWh1WwJ6DN4UlgFG0r-GiARMJ97_eucaA3Lk',
            accessToken: 'ya29.Il-8B8UeHAYWlzAGJngwtn5wqTo8TdzfNGiYi62BcneiyHTmqF3DvnVjYqZyrthrpz1y10UixbmaCU32TcjdsiVF2YldxL-pATdHvAF0rqFLZmk7u5SfQn2_i2qOYFmYRQ',
        },
    });

    let mailOptions = {
        from: data.email, // sender address
        to: 'ci4anish@gmail.com', // list of receivers
        subject: req.body.subject || 'Subject', // Subject line
        text: req.body.body || 'Text', // plain text body
        html: `<b>${data.description}</b>` // html body
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.json(info.response);
    });

});