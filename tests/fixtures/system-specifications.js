var systems = [
  {
    name: 'algae',
    initialState: 'A',
    rules: {
      A: 'AB',
      B: 'A'
    },
    expectedStates: [
      'A',
      'AB',
      'ABA',
      'ABAAB',
      'ABAABABA',
      'ABAABABAABAAB',
      'ABAABABAABAABABAABABA',
      'ABAABABAABAABABAABABAABAABABAABAAB'
    ]
  }
];

module.exports = Object.freeze(systems);
