'use strict';

function LSystem(opts) {
  var {
    variables,
    constants,
    initialState,
    rules
  }
  = opts;

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
    let nextState = '';
    for (let symbol of state) {
      let result = rules[symbol];
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
    for (let k of constants) {
      addIdentityRuleForConstant(k, rules);
    }
  }
}

module.exports = LSystem;
