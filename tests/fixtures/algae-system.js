var expectedStates = [
  'A',
  'AB',
  'ABA',
  'ABAAB',
  'ABAABABA',
  'ABAABABAABAAB',
  'ABAABABAABAABABAABABA',
  'ABAABABAABAABABAABABAABAABABAABAAB'
];

var info = {
  initialState: 'A',
  rules: {
    A: 'AB',
    B: 'A'
  }
};

info.expectedStates = Object.freeze(expectedStates);

module.exports = info;
