const request = require('request');
const TelegramBot = require('node-telegram-bot-api');
const token = '5489133062:AAGBAZOk20SAu-TnRJOGVHOtFCyKLoN9dSs';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(mg){
request('http://www.omdbapi.com/?t='+mg.text+'&apikey=f4ff4db7', function (error, response, body) {
  if(JSON.parse(body).Response=="True"){
    bot.sendMessage(mg.chat.id, "Title "+JSON.parse(body).Title)
    bot.sendMessage(mg.chat.id, "Release Date "+JSON.parse(body).Released)
    bot.sendMessage(mg.chat.id, "Actors "+JSON.parse(body).Actors)
    bot.sendMessage(mg.chat.id, "Rating "+JSON.parse(body).Ratings[0].Value)
  }
  else{
      bot.sendMessage(mg.chat.id, "Movie not found")
  }
});
})