module.exports = (app) => {
    const token = require('../controllers/token');

    // Create a new Note
    app.post('/token', token.create);

    // Retrieve all token
    app.get('/token', token.findAll);

    // Retrieve a single Note with noteId
    app.get('/token/:noteId', token.findOne);

    // Update a Note with noteId
    app.put('/token/:noteId', token.update);

    // Delete a Note with noteId
    app.delete('/token/:noteId', token.delete);

    // Verify token
    app.post('/token/verify', token.verify);
}