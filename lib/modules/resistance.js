const gameChannel = 'resistance';
const matchers = {
  joinGame: {
    regex: /join our game ([A-z]+)/i,
    handler: joinGame,
    channels: ['private', gameChannel],
    description: 'A player wants playerbot to join a game of resistance'
  }
};

function joinGame(api, data) {
  const options = api.options;
  const caller = api.getUserName(data.user);
  const subject = data.text.match(matchers.joinGame.regex)[1];
  const botname = api.options.slackbot.name;

  // console.log(`[${botname}]`, 'Someone might want me to join their game', caller, 'said:', `"${data.text}"`);
  if (subject.toLowerCase() === botname.toLowerCase()) {
    const response = `Ok, I'll join your game ${caller}~`;
    api.respond(data, response);
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
