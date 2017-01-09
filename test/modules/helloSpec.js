const expect = require('chai').expect;
const api = require('../../lib/api');
const hello = require('../../lib/modules/hello');
const mockPlayerbot = require('../lib/mockPlayerbot');
const NL = '\n';

describe('Hello module', function () {
  var module, playerbot;

  beforeEach(() => {
    playerbot = mockPlayerbot();
    module = hello(playerbot, false);
  });

  it(`should recognise greetings and respond in kind`, (done) => {
    playerbot.respond = (target, response, params) => {
      expect(response.split(NL)).to.deep.equal([
        `hey Rico :)`
      ]);
      expect(target.channel).to.equal('sameChannel');
      done();
    };
    playerbot.simulateMessage(`hello Claes`, 'u5', 'sameChannel');
  });
});
