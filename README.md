# odin-testing-practice

JavaScript testing exercises for [The Odin Project Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice), using Jest and Babel.

The five exercise modules in `src/` are covered by 39 tests across five test suites.

## Setup

Install Node.js and npm, then install the locked dependencies:

```sh
npm ci
```

The setup was verified with Node.js 24.22.0 and npm 11.19.1.

## Test commands

```sh
npm test
npm run test:watch
```

`npm test` runs Jest once. The watch command reruns tests related to changed files.

## ES modules

Use ES6 `import` and `export` in JavaScript files. Following [Testing Basics](https://www.theodinproject.com/lessons/node-path-javascript-testing-basics#using-es6-import-statements-with-jest), Babel 7 uses `@babel/preset-env` with the current Node.js version as its target. Jest uses `babel-jest` to transform modules to CommonJS in memory before running tests.

## Behavior and examples

Each module exports its named function or object. Tests sit beside the module in `src/`.

| Export | Behavior | Example |
| --- | --- | --- |
| `capitalize` | Uppercases the first character and preserves the rest | `capitalize('hELLo')` → `'HELLo'` |
| `reverseString` | Reverses a string, including spaces and punctuation | `reverseString('Hi!')` → `'!iH'` |
| `calculator` | Provides `add`, `subtract`, `divide`, and `multiply` for two numbers | `calculator.divide(7, 2)` → `3.5` |
| `caesarCipher` | Shifts English letters with wrapping, preserving case and non-letter characters | `caesarCipher('Hello, World!', 3)` → `'Khoor, Zruog!'` |
| `analyzeArray` | Returns the average, minimum, maximum, and length of a non-empty numeric array | See below |

```js
import { analyzeArray } from './src/analyzeArray.js';

analyzeArray([1, 8, 3, 4, 2, 6]);
// { average: 4, min: 1, max: 8, length: 6 }
```

The tested cipher shifts are non-negative integers, including zero and values greater than 26. Negative or fractional shifts, invalid inputs, empty arrays, and division by zero have no additional project requirements or custom validation.

## Testing approach

The exercises use a test-first workflow: define the expected behavior, implement
the function, then refactor while keeping the tests passing. Tests check public
return values, including the assignment's three cipher examples and array
analysis example.

## Dependency maintenance

An earlier dependency audit reported findings in the Jest development toolchain
through `sprintf-js`. Run `npm audit` to check the installed dependency tree
before updating tools; historical audit counts are not a current security report.
