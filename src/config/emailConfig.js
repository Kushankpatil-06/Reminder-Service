const nodemailer = require('nodemailer');

const { EMAIL_ID, APP_PASSWORD } = require('./serverConfig');
console.log(EMAIL_ID, APP_PASSWORD);
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,
        pass: APP_PASSWORD
    }
});

module.exports = sender;