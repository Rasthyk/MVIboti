var restify = require('restify');
var builder = require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
 console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
 appId: "5ae28e41-65c1-4ba4-a5d4-3bfab47f46f5",
 appPassword: "8VLhj4eFhumrFGcnwE9Jsji"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/', function (session) {
 session.send("Hello World");
});
