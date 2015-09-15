lsystem
=======

A module that lets you create [L-systems](https://en.wikipedia.org/wiki/L-system), which will take rules, then use those rules to transform strings into other strings.

For Node v4.0.0. and the browser (via Browserify and Babelify). On Node, requires that you run it with the ` --harmony_destructuring` or `--es_staging` switch. (Dag! I know, right?)

Installation
------------

    npm install lsystem

Usage
-----

    var LSystem = require('lsystem');
    var lsys = LSystem({
      variables: ['A', 'B'],
      initialState: 'A',
      rules: {
        A: 'AB',
        B: 'A'
      }
    });

    lsys.

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
