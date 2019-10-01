// Game Client
var http    = require('http');
var express = require('express');
var app 	= express();
app.use('/', express.static(__dirname + '/Game/'));

var server	= http.createServer(app);
var io 		= require('socket.io').listen(server);
server.listen(8080);

//io.sockets.on('connection', function(socket)
//{
//
//});

// IRC Bot
var settings =
{
	channels : ["#berkeleygames"],
	server : "irc.twitch.tv",
	port: 6667,
	secure: false,
	nick : "gperry91",
	password : "oauth:spuu98f8h2f7ad71bejtnzhnynsrss"
};

var irc = require("irc");
var channel = settings.channels[0];

var bot = new irc.Client(settings.server, settings.nick,
{
	channels:[settings.channels + " " + settings.password],
	password:settings.password,
	username:settings.nick,
	debug:false
});

bot.messagesToSend = {};
bot.addListener("message", function(user, channel, message)
{
	//console.log(user+":", message);
	validateUser(user);
	if(!isValidCommand(message)) return;
	bot.messagesToSend[user.toString()] = {data:message.toString()};
	console.log(bot.messagesToSend);
});

// Emit the bot.messagesToSend object to the game client every 1 second(s)
function sendMessages()
{
	if(Object.keys(bot.messagesToSend).length == 0) return;
	io.sockets.emit('command', bot.messagesToSend);
	console.log("- Sending Data to Client -\n");
	bot.messagesToSend = {};
} setInterval(sendMessages, 100);

// Check if the incoming chat message is any one of the valid commands
var validCommands = ["join", "join knight", "join wizard", "join ninja", "join barbarian", "attack", "defend"];
function isValidCommand(command)
{
	var isValid = false;
	for(var i = 0; i < validCommands.length; i++)
	{
		if(command.toLowerCase() == validCommands[i]) isValid = true;
	}
	return isValid;
}

function validateUser()
{

}