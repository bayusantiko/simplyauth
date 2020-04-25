exports.sendToken = (token, user) => {
  var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("1244613061:AAFUVkbB8-e9HRxk8DqPJWehTohqBWKDF5I", { polling: true });
    telegram.sendMessage(user, token);
};

