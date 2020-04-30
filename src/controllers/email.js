var nodemailer = require('nodemailer');
const writefile = require('../services/writefile');
const moment = require('moment');
const path = require('path');
const filename = 'error.txt'

exports.sendEmail = (token, user) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.telkom.co.id',
        port: 587,
        secure: false,
        auth: {
          user: '',
          pass: ''
        },
        tls: {
          ciphers:'SSLv3'
        }
      });
      
      var mailOptions = {
        from: '910087@telkom.co.id',
        to: user,
        subject: 'Sending Email using Node.js',
        text: `${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          location = path.join('/var/www/html','simplyauth','log', filename)
          //write to log file
          writefile(location,"Error send email : "+ error.message+" "+moment().format()+"\n")
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
};
