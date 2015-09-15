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
    
  }

  return {
    getIteration: getIteration,
    getState: getState,
    advance: advance
  };
}

module.exports = LSystem;
