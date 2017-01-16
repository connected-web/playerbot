const gameChannel = 'resistance';
const matchers = {
  joinGame: {
    regex: /(please )?join our game ([A-z]+)/i,
    handler: joinGame,
    channels: ['private', gameChannel],
    description: 'A player wants playerbot to join a game of resistance'
  },
  leaveGame: {
    regex: /(please )?leave our game ([A-z]+)/i,
    handler: leaveGame,
    channels: ['private', gameChannel],
    description: 'A player wants playerbot to leave a game of resistance'
  }
};

function joinGame(api, data) {
  const options = api.options;
  const caller = api.getUserName(data.user);
  const subject = data.text.match(matchers.joinGame.regex)[2];
  const botname = api.options.slackbot.name;

  // console.log(`[${botname}]`, 'Someone might want me to join their game', caller, 'said:', `"${data.text}"`);
  if (subject.toLowerCase() === botname.toLowerCase()) {
    const response = `Ok, I'll join your game ${caller}~`;
    api.respond(data, response);
    api.respond('gamebot', 'join game');
  } else {
    // I guess they weren't talking to me...
  }
}

function leaveGame(api, data) {
  const options = api.options;
  const caller = api.getUserName(data.user);
  const subject = data.text.match(matchers.leaveGame.regex)[2];
  const botname = api.options.slackbot.name;

  // console.log(`[${botname}]`, 'Someone might want me to leave their game', caller, 'said:', `"${data.text}"`);
  if (subject.toLowerCase() === botname.toLowerCase()) {
    const response = `Ok, I'll leave your game ${caller}~`;
    api.respond(data, response);
    api.respond('gamebot', 'leave game');
  } else {
    // I guess they weren't talking to me...
  }
}

module.exports = function (api) {
  api.matchers = api.matchers || [];
  Object.keys(matchers).forEach((name) => {
    const matcher = matchers[name];
    api.matchers.push(matcher);
  });
};
