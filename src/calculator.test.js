import { calculator } from './calculator.js';

describe('calculator', () => {
  test.each([
    [2, 3, 5],
    [-2, 3, 1],
    [0, 4, 4],
    [0.1, 0.2, 0.3],
  ])('add(%j, %j) returns %j', (first, second, expected) => {
    expect(calculator.add(first, second)).toBeCloseTo(expected);
  });

  test.each([
    [7, 3, 4],
    [3, 7, -4],
    [-2, -3, 1],
    [4, 0, 4],
  ])('subtract(%j, %j) returns %j', (first, second, expected) => {
    expect(calculator.subtract(first, second)).toBe(expected);
  });

  test.each([
    [8, 2, 4],
    [7, 2, 3.5],
    [-9, 3, -3],
    [0, 5, 0],
  ])('divide(%j, %j) returns %j', (first, second, expected) => {
    expect(calculator.divide(first, second)).toBeCloseTo(expected);
  });

  test.each([
    [3, 4, 12],
    [-3, 4, -12],
    [3, 0, 0],
    [0.5, 3, 1.5],
  ])('multiply(%j, %j) returns %j', (first, second, expected) => {
    expect(calculator.multiply(first, second)).toBeCloseTo(expected);
  });
});
