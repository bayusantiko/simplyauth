const mongoose = require('mongoose');
const moment = require('moment');

const TokenSchema = mongoose.Schema({
    token: { type: String, unique: true },
    user: String,
    status: String,
    expiredAt: { type: Date, default: moment().add(7,'Hours').add(30,'Minutes') },
}, {
    timestamps: true
});

module.exports = mongoose.model('Token', TokenSchema);
