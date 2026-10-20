import { reverseString } from './reverseString.js';

test.each([
  ['hello', 'olleh'],
  ['Hi, there!', '!ereht ,iH'],
  ['a', 'a'],
  ['', ''],
])('reverseString(%j) returns %j', (input, expected) => {
  expect(reverseString(input)).toBe(expected);
});
