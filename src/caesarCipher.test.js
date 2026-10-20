import { caesarCipher } from './caesarCipher.js';

test.each([
  ['abc', 3, 'def'],
  ['xyz', 3, 'abc'],
  ['HeLLo', 3, 'KhOOr'],
  ['Hello, World!', 3, 'Khoor, Zruog!'],
  ['XYZ', 3, 'ABC'],
  ['Hello!', 0, 'Hello!'],
  ['Hello!', 26, 'Hello!'],
  ['xyz', 29, 'abc'],
  ['123!? 🙂', 3, '123!? 🙂'],
  ['', 3, ''],
])('caesarCipher(%j, %j) returns %j', (string, shift, expected) => {
  expect(caesarCipher(string, shift)).toBe(expected);
});
