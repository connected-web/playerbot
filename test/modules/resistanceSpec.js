const expect = require('chai').expect;
const api = require('../../lib/api');
const resistance = require('../../lib/modules/resistance');
const mockPlayerbot = require('../lib/mockPlayerbot');
const NL = '\n';

describe('Play Resistance (core)', function () {
  var module, playerbot;

  beforeEach(() => {
    playerbot = mockPlayerbot();
    module = resistance(playerbot, false);
  });

  it(`should join a game when invited`, (done) => {
    playerbot.respond = (target, response, params) => {
      expect(response.split(NL)).to.deep.equal([
        `Ok, I'll join your game Rico~`
      ]);
      expect(target.channel).to.equal('private');
      done();
    };
    playerbot.simulateMessage(`join our game Claes`, 'u5');
  });
});
