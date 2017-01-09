const api = require('../../lib/api');
const handleMessage = require('../../lib/handleMessage');
const LOG_ENABLED = false;

function mockPlayerbot() {
  var userIDIndex = {
    'u0': 'Test Bot',
    'u1': 'John',
    'u2': 'Henrietta',
    'u3': 'Claes',
    'u4': 'Triela',
    'u5': 'Rico',
    'u6': 'Angelica'
  };
  var channelIDIndex = {};

  var userNameIndex = {};
  Object.keys(userIDIndex).forEach((userId) => {
    userNameIndex[userIDIndex[userId].toLowerCase()] = userId;
  });

  playerbot = api({
    slackbot: {
      id: '@bot',
      name: 'Claes'
    }
  });

  playerbot.getUserName = (id) => {
    return userIDIndex[id] || id;
  };

  playerbot.getChannelName = (id) => {
    return channelIDIndex[id] || id;
  }

  playerbot.findUserByName = (name) => {
    return {
      name,
      id: userNameIndex[(name + '').toLowerCase()]
    };
  }

  playerbot.simulateMessage = (message, userId, channelId) => {
    handleMessage(playerbot, {
      type: 'message',
      text: message,
      user: userId,
      channel: channelId || 'private'
    }, LOG_ENABLED);
  };

  playerbot.respond = () => {};

  return playerbot;
}

module.exports = mockPlayerbot;
