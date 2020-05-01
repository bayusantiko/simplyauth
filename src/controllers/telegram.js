exports.sendToken = (token, user) => {
  var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("YOUR TOKEN", { polling: true });
    telegram.sendMessage(user, `Your token is ${token} , will be expired in 10 minutes`);
};

