const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const {PORT} = require('./config/ServerConfig')
const {sendBasicEmail} = require('./services/email-service')

const setUpandStartServer = ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`Server is running fine ${PORT}`);
        sendBasicEmail(
            'support@flyconnect@gmail.com',
            'aerosphere911@gmail.com',
            'Test Email',
            'This is a test email'
        )
        });
}
setUpandStartServer();