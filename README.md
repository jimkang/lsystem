lsystem
=======

A module that lets you create [L-systems](https://en.wikipedia.org/wiki/L-system), which will take rules, then use those rules to transform strings into other strings.

Installation
------------

    npm install lsystem

Usage
-----

`example.js`:

    var LSystem = require('lsystem');
    var lsys = LSystem({
      initialState: 'A',
      rules: {
        A: 'AB',
        B: 'A'
      }
    });

    for (let i = 0; i < 5; ++i) {
      console.log(lsys.advance());
    }

Execution:

    node example.js

Output:

    AB
    ABA
    ABAAB
    ABAABABA
    ABAABABAABAAB

API
---

**LSystem**

Creates an L-system. Opts:

  - **initialState**: A string containing the symbols in the initial state of the system.
  - **rules**: A dictionary mapping symbols to a string of symbols that they should produce. e.g. `A: 'AB'` indicates that when the system advances, instances of the symbol 'A' should become 'AB' in the next iteration.

**advance**

Advances the system one iteration. Applies the rules to the current state and updates the state. Returns the state.

**getState**

Gets the current state of the L-system, which is a string. e.g. 'ABAABABA'.

**getIteration**

Get the current iteration number.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
