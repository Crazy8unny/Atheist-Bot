var Discord = require('discord.io');
var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
	
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
		let msg = (message.substring(1, message.length)).toLowerCase();
            // !ping
            if (msg == 'big bang') {
				bot.sendMessage({
					to: channelID,
					message: 'וואלה אני סתם אפס כרגע שלא עושה כלום כזה'
				});
			}
			else if (msg == 'link') {
				bot.sendMessage({
					to: channelID,
					message: 'https://discordapp.com/oauth2/authorize?client_id=532223706844495872&scope=bot&permissions=0'
				});
			}
			else if (msg.startsWith('יש אלוהים')) {
				bot.sendMessage({
					to: channelID,
					message: 'אין אלוהים !'
				});
			}
			else if (msg.startsWith('יש')) {
				bot.sendMessage({
					to: channelID,
					message: 'אין אחי !'
				});
			}
			else if (msg.startsWith('למי מצביעים')) {
				bot.sendMessage({
					to: channelID,
					message: 'רק ביבי !'
				});
			}
	    		else if (msg.startsWith('ראית שטיינס גייט?')) {
				bot.sendMessage({
					to: channelID,
					message: 'פחחחח נראה לך  !'
				});
			}
	    		else if (msg.startsWith('היי')) {
				bot.sendMessage({
					to: channelID,
					message: 'היי אורי !'
				});
			}
			else {
			
			}
     }
});
