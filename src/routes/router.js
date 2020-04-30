module.exports = (app) => {
    const token = require('../controllers/token');
    const login = require('../controllers/login');

    // Create a new token and  send to telegram
    app.post('/token', token.create);

    // Create a new token and send to email
    app.post('/token/email', token.sendEmail);

    // Retrieve all token
    app.get('/token', token.find);

    // Update a Note with noteId
    app.put('/token/:noteId', token.update);

    // Delete a Note with noteId
    app.delete('/token/:noteId', token.delete);

    // Verify token
    app.post('/token/verify', token.verify);

    // Expires token
    app.get('/token/expires', token.expires);

    // handling UI
    app.get('/', function (req, res) {
        res.send('respond with a resource');
    });
    app.post('/login', login.login);
}