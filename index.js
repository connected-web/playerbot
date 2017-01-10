const api = require('./lib/api');
const tokens = require('./tokens.json');

const playerbots = tokens.map(createPlayerbot);

function createPlayerbot(config) {

  const options = {
    slackbot: {
      token: config.token, // Register on slack
      name: config.name || 'Player Bot',
      id: config.id || '@playerbot',
    },
    message: {
      params: {
        icon_url: config.avatar || ''
      }
    }
  };
  const playerbot = api(options);

  playerbot.load()
    .then(playerbot.connect);

  return playerbot;
}
