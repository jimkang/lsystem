var test = require('tape');
var LSystem = require('../index');
var algaeSystem = require('./fixtures/algae-system');
var _ = require('lodash');

test('Algae test', function algae(t) {
  var lsys = LSystem(_.pick(algaeSystem, 'initialState', 'rules'));
  
  algaeSystem.expectedStates.forEach(testIteration);

  function testIteration(expectedState, i) {
    t.equal(lsys.getIteration(), 0, `Reports it is on iteration ${i}.`);
    t.equal(
      lsys.getState(), expectedState, `State is correct for iteration ${i}.`
    );
    lsys.advance();
  }

  t.end();
});


// TODO: Stochastic L-system with function-based rules.
