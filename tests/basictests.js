var test = require('tape');
var LSystem = require('../index');
var _ = require('lodash');
var systems = require('./fixtures/system-specifications');

systems.forEach(runTest);

function runTest(systemSpec) {
  test(`${systemSpec.name} test`, function systemTest(t) {
    var lsys = LSystem(
      _.pick(systemSpec, 'initialState', 'rules', 'constants')
    );
    
    systemSpec.expectedStates.forEach(testIteration);

    function testIteration(expectedState, i) {
      t.equal(lsys.getIteration(), 0, `Reports it is on iteration ${i}.`);
      t.equal(
        lsys.getState(), expectedState, `State is correct for iteration ${i}.`
      );
      lsys.advance();
    }

    t.end();
  });
}

// TODO: Stochastic L-system with function-based rules.
