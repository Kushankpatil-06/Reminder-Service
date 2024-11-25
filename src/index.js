const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const {PORT} = require('./config/ServerConfig')
const {sendBasicEmail} = require('./services/email-service')
const jobs = require('./utils/job')
const TicketController = require('./controller/ticket-controller')


const setUpandStartServer = ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.post('/api/v1/tickets',TicketController.create)
    let currentTime = new Date();
    app.listen(PORT,()=>{
        console.log(`Server is running fine ${PORT}`);
        console.log(currentTime);
        jobs();
        // sendBasicEmail(
        //     'support@flyconnect@gmail.com',
        //     'aerosphere911@gmail.com',
        //     'Test Email',
        //     'This is a test email'
        // )
        });
}
setUpandStartServer();