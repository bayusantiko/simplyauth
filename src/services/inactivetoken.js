const token = require('../controllers/token');
const path = require('path');
var cron = require('node-cron');
const writefile = require('./writefile');
const moment = require('moment');
const filename = 'log.txt'

//scan expires token every 10 minutes
function jobscheduler(){
    cron.schedule('*/10 * * * *', () => {
        //console.log('running a task every 10 minute');
        
        location = path.join('/var/www/html','simplyauth','log', filename)
        //write to log file
        //writefile(location,"Run Cron Job at "+moment().format()+"\n")
       token.expires();
      });
    
}
module.exports.jobscheduler = jobscheduler;
