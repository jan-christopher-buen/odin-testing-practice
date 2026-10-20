# odin-testing-practice

JavaScript testing exercises for [The Odin Project Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice), using Jest and Babel.

Phases 1 and 2 are complete: the testing environment, `capitalize`, and `reverseString` are implemented and tested.

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

## Planned phases

1. npm, Jest, Babel, ignore rules, and test scripts (complete)
2. `capitalize` and `reverseString` (complete)
3. `calculator`: `add`, `subtract`, `divide`, and `multiply`
4. `caesarCipher`
5. `analyzeArray` and final review

Each exercise will follow the red/green/refactor workflow: write behavior tests, confirm the expected failure, implement a solution, and refactor while keeping tests passing.
