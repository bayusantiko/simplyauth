const token = require('../controllers/token');
const path = require('path');
var cron = require('node-cron');
const writefile = require('./writefile');
const moment = require('moment');
const filename = 'log.txt'

//scan expires token every 2 minutes
function jobscheduler(){
    cron.schedule('5 * * * *', () => {
        console.log('running a task every minute');
        
        location = path.join('/','WORKS','simplyauth','log', filename)
        //write to log file
        writefile(location,"Run Cron Job at "+moment().format()+"\n")
       token.expires();
      });
    
}
module.exports.jobscheduler = jobscheduler;
