function LSystem(opts) {
  var variables;
  var constants;
  var initialState;
  var rules;

  if (opts) {
    variables = opts.variables;
    constants = opts.constants;
    initialState = opts.initialState;
    rules = opts.rules;    
  }

  var n = 0;
  var state = initialState;
  addRulesForConstants(constants, rules);

  function getIteration() {
    return n;
  }

  function getState() {
    return state;
  }

  function advance() {
    var nextState = '';
    var symbol;
    var result;

    for (var i = 0; i < state.length; ++i) {
      symbol = state.charAt(i);
      result = rules[symbol];
      nextState += result;
    }
    state = nextState;
    return nextState;
  }

  return {
    getIteration: getIteration,
    getState: getState,
    advance: advance
  };
}

function addIdentityRuleForConstant(k, rules) {
  rules[k] = k;
}

function addRulesForConstants(constants, rules) {
  if (constants) {
    var k;
    for (var i = 0; i < constants.length; ++i) {
      k = constants.charAt(i);
      addIdentityRuleForConstant(k, rules);
    }
  }
}

module.exports = LSystem;
