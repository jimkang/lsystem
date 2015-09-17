var systems = [
  {
    name: 'Algae',
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
  },
  {
    name: 'Pythogoras Tree',
    initialState: '0',
    constants: '[,]',
    rules: {
      '0': '1[0]0',
      '1': '11'
    },
    expectedStates: [
      '0',
      '1[0]0',
      '11[1[0]0]1[0]0',
      '1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0'
    ]
  },
  {
    name: 'Cantor set',
    initialState: 'A',
    rules: {
      'A': 'ABA',
      'B': 'BBB'
    },
    expectedStates: [
      'A',
      'ABA',
      'ABABBBABA',
      'ABABBBABABBBBBBBBBABABBBABA'
    ]
  }
];

module.exports = Object.freeze(systems);
