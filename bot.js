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
        let res;
        if (msg == 'big bang') {
            res = 'וואלה אני סתם אפס כרגע שלא עושה כלום כזה';
        }
        else if (msg == 'link') {
            res = 'https://discordapp.com/oauth2/authorize?client_id=532223706844495872&scope=bot&permissions=0';
        }
        else if (msg.startsWith('יש אלוהים')) {
            res = 'אין אלוהים !';
        }
        else if (msg.startsWith('יש')) {
            res = 'אין אחי !';
        }
        else if (msg.startsWith('למי מצביעים')) {
            res = 'רק ביבי !';
        }
        else if (msg == 'ראית שטיינס גייט?') {
            res = 'פחחחח נראה לך  !';
        }
        else if (msg == 'מה עם סטארגייט?') {
            res = 'זה התוכנית של האלה שעוברים בין עולמים ומפיצים אתאיזם? לא מכיר';
        }
        // else if (msg == 'היי') {
        // 	bot.sendMessage({
        // 		to: channelID,
        // 		message: 'חחח מצחיק אורי'
        // 	});
        // }
        // else if (msg == 'לא קוראים לי אורי') {
        // 	bot.sendMessage({
        // 		to: channelID,
        // 		message: 'חחח מצחיק אורי'
        // 	});
        // }
        else if (msg == 'אני לא אורי אומרים לך') {
            res = 'אתה והשטויות שלך';
        }
        else if (msg.startsWith('הגרל')) {
            let numberString = msg.substring(5, msg.length);
            let numbers = numberString.split('-');
            if (numbers.length == 2) {
                res = Math.floor(Math.random() * parseInt(numbers[1]) + parseInt(numbers[0]));
                if (res.toString() == 'NaN') {
                    res = "אורי מה זה השטויות האלה ששמת פה"
                }
            }
            else {
                res = "אתה צריך לשלוח  שתי מספרים עם - מפריד ביניהם אורי"
            }
        }
        else if (msg.startsWith('בחר')) {
            let numberString = msg.substring(3, msg.length);
            let numbers = numberString.split(' או ');
            if (numbers.length > 1) {
                res = numbers[Math.floor(Math.random() * numbers.length)];
            }
            else {
                res = "אתה צריך לשלוח מספר אפשרויות עם ''או'' מפריד ביניהם אורי"
            }
        }
        else if (msg.startsWith('ספור')) {
            let numberString = msg.substring(4, msg.length);
            let countdown = parseInt(numberString);
            if (numberString.length == 0) {
                countdown = 5;
            }
            if (countdown.toString() == 'NaN' || countdown > 100 || countdown < 0) {
                countdown = 0;
                bot.sendMessage({
                    to: channelID,
                    message: 'עליך לציין מספר שניות לאחר הפקודה (עד 100 שניות)'
                });
            }
            let count = setInterval(() => {
                if (countdown <= 0) {
                    clearInterval(count);
                }
                else {
                    bot.sendMessage({
                        to: channelID,
                        message: countdown.toString()
                    });
                    countdown--;
                }
            }, 1000);
            res = false;
        }
        else {
            res = 'חחח מצחיק אורי';
        }
        if (res != false) {
            bot.sendMessage({
                to: channelID,
                message: res.toString()
            });
        }
    }
    else {

    }
});
