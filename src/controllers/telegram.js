exports.sendToken = (token, user) => {
  var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("YOUR_BOT_TOKE", { polling: true });
    telegram.sendMessage(user, token);
};

