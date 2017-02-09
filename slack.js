const Botkit = require('botkit');
const builder = require('botbuilder');

const controller = Botkit.slackbot();
const bot = controller.spawn({
  token: process.env.SLACK_TOKEN
});

const slackBot = new builder.SlackBot(controller, bot);
slackBot.add('/', (session) => {
  session.send('Hello World');
});

slackBot.listenForMentions();

bot.startRTM((err,bot,payload) => {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
