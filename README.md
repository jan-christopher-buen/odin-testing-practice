# odin-testing-practice

JavaScript testing exercises for [The Odin Project Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice), using Jest and Babel.

All five phases are complete. The five exercise modules in `src/` have 39 passing tests across five test suites.

## Setup

Install Node.js and npm, then install the locked dependencies:

```sh
npm ci
```

The setup was verified with Node.js 24.22.0 and npm 11.19.1.

The Phase 1 dependency audit reported 19 moderate findings in the Jest dependency tree, originating from `sprintf-js`. npm's suggested fix changes Jest and `babel-jest` to version 25; that downgrade has not been applied.

## Test commands

```sh
npm test
npm run test:watch
```

`npm test` runs Jest once. The watch command reruns tests related to changed files.

## ES modules

Use ES6 `import` and `export` in JavaScript files. Following [Testing Basics](https://www.theodinproject.com/lessons/node-path-javascript-testing-basics#using-es6-import-statements-with-jest), Babel 7 uses `@babel/preset-env` with the current Node.js version as its target. Jest uses `babel-jest` to transform modules to CommonJS in memory before running tests.

## Completed phases

1. npm, Jest, Babel, ignore rules, and test scripts (complete)
2. `capitalize` and `reverseString` (complete)
3. `calculator`: `add`, `subtract`, `divide`, and `multiply` (complete)
4. `caesarCipher` (complete)
5. `analyzeArray` and final review (complete)

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

The tested cipher shifts are non-negative integers, including zero and values greater than 26. Negative or fractional shifts, invalid inputs, empty arrays, and division by zero have no additional project requirements or custom validation. Agree on their expected behavior before adding tests or special handling.

## Test-first workflow

Tests were written before implementing each exercise. Empty exported functions first produced the expected failures because they returned `undefined`; the implementations then made the tests pass. Refactor reviews kept the solutions simple, with a cipher cleanup replacing numeric character codes with readable letter references.

| Phase | Red result for new tests | Green result for all tests |
| --- | --- | --- |
| 2: String functions | 8 failed | 8 passed |
| 3: Calculator | 16 failed | 24 passed |
| 4: Caesar cipher | 10 failed | 34 passed |
| 5: Array analysis | 5 failed | 39 passed |

Tests check public return values, including the assignment's three required cipher examples and array analysis example. No private helpers are tested.
