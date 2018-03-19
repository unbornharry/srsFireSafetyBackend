var express = require('express');
var nodemailer = require("nodemailer");
var router = express.Router();

var smtpTransport = nodemailer.createTransport({
    service: "yahoo",
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false,
    auth: {
        user: "untamedbarbarian@yahoo.com",
        pass: "stupid_123"
    }
});


router.get('/',function(req,res){
    var mailOptions={
       from: 'untamedbarbarian@yahoo.com',
       to : 'untamedbarbarian@yahoo.com',
       subject : req.query.subject,
       text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
        res.status(400).send();
    }else{
        console.log("Message sent: " + response.message);
        res.status(200).send();
    }
    });
});

module.exports = router;