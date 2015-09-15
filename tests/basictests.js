var test = require('tape');
var LSystem = require('../index');

var expectedAlgaeStates = [
  'A',
  'AB',
  'ABA',
  'ABAAB',
  'ABAABABA',
  'ABAABABAABAAB',
  'ABAABABAABAABABAABABA',
  'ABAABABAABAABABAABABAABAABABAABAAB'
];
Object.freeze(expectedAlgaeStates);

test('Algae test', function algae(t) {
  var lsys = LSystem({
    variables: ['A', 'B'],
    initialState: 'A',
    rules: {
      A: 'AB',
      B: 'A'
    }
  });

  expectedAlgaeStates.forEach(testIteration);

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
