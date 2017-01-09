const helloMatcher = {
  'regex': /hello ([A-z]+)/i,
  'handler': hello,
  'description': 'Matched a greeting'
};

// Process the hello
function hello(api, data) {
  const options = api.options;
  const caller = api.getUserName(data.user);
  const subject = data.text.match(helloMatcher.regex)[1];
  const botname = api.options.slackbot.name;

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
