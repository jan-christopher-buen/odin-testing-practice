import { capitalize } from './capitalize.js';

test.each([
  ['hello', 'Hello'],
  ['Hello', 'Hello'],
  ['hELLo', 'HELLo'],
  ['', ''],
])('capitalize(%j) returns %j', (input, expected) => {
  expect(capitalize(input)).toBe(expected);
});
