const helloMatcher = {
  'regex': /(hello|hey|howdy|yo|sup) ([A-z]+)/i,
  'handler': hello,
  'description': 'Matched a greeting'
};

// Process the hello
function hello(api, data) {
  const options = api.options;
  const caller = api.getUserName(data.user);
  const subject = data.text.match(helloMatcher.regex)[2];
  const botname = api.options.slackbot.name;

  // console.log(`[${botname}]`, 'Someone might be talking to me:', caller, 'said:', `"${data.text}"`);
  if (subject.toLowerCase() === botname.toLowerCase()) {
    const response = `hey ${caller} :)`;
    api.respond(data, response);
  } else {
    // I guess they weren't talking to me...
  }
}

module.exports = function (api) {
  api.matchers = api.matchers || [];
  api.matchers.push(helloMatcher);
};
