const restify = require('restify');
const builder = require('botbuilder');

// Setup Restify Server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
const connector = new builder.ChatConnector({
  appId: process.env.MS_APP_ID,
  appPassword: process.env.MS_APP_PW
});
const bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', (session) => {
  session.send('Hello World');
});
