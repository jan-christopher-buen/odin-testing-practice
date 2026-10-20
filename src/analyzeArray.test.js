import { analyzeArray } from './analyzeArray.js';

test.each([
  [[1, 8, 3, 4, 2, 6], { average: 4, min: 1, max: 8, length: 6 }],
  [[5], { average: 5, min: 5, max: 5, length: 1 }],
  [[-8, -2, -5], { average: -5, min: -8, max: -2, length: 3 }],
  [[0, 0, 0], { average: 0, min: 0, max: 0, length: 3 }],
  [[1, 2], { average: 1.5, min: 1, max: 2, length: 2 }],
])('analyzeArray(%j) returns %j', (numbers, expected) => {
  expect(analyzeArray(numbers)).toEqual(expected);
});
