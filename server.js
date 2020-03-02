const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8008;

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const nodeMailer = require('nodemailer');

app.use(express.static(__dirname + ''));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(cors());
app.use(express.static(path.join(__dirname, '')));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/projects', function (req, res) {
    res.sendFile(path.join(__dirname + '/projects.html'));
});

app.use('/', router);
app.listen(process.env.port || port);

console.log(`Running at Port ${port}`);

router.post('/send-email', async function (req, res) {
    const mainEmail = 'taras.pohoretskyi.whalestep@gmail.com';
    let data = req.body;
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: mainEmail,
            clientId: '662769671744-7t75rtpo0qjv042im8124fakof8c93k7.apps.googleusercontent.com',
            clientSecret: 'uZc5dS2ZL2iO6xht5dkr6-zD',
            refreshToken: '1//0470pSmKbYZF8CgYIARAAGAQSNwF-L9IrOxS4mQJxWfdOpd0OiF6-s6bwMK-v6E03op0K6aPZKOZwLWsZ4nvixEdKspx-QZU4ca8',
            accessToken: 'ya29.Il_ABwWSZAoDbrH5AW_V7kdUgoTn80RAQFecF1NttDelMPPiulhDi8dAvrauJAqdFYpmtzQYi4UGwhMzsd8PkDWmnkzSdFDOKZqmHFDCkuQyNe5h3-EeWcLy77iYGjFJcg',
        },
    });
    let mailOptions = {
        from: data.full_name + ' ' + data.email, // sender address
        to: mainEmail, // list of receivers
        subject: data.email || 'Subject', // Subject line
        text: req.body.description || 'Text', // plain text body
        html: `<b>${data.description}</b>` // html body
    };
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.json(info.response);
    });
});
