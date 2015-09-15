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

module.exports = LSystem;
