const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/router');
const scheduler = require('./src/services/inactivetoken');
var fs = require('fs')
var https = require('https')
const path = require('path');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./src/config/database');
const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json("Hello simplyauth");
});

router(app);

//scheduler service
scheduler.jobscheduler();


// listen for requests
cert = path.join('/var/www/html','simplyauth','ssl', 'server.crt')
key = path.join('/var/www/html','simplyauth','ssl', 'server.key')
https.createServer({
    key: fs.readFileSync(key),
    cert: fs.readFileSync(cert)
  }, app).listen(8020, () => {
    console.log("Server is listening on port 8020");
});

