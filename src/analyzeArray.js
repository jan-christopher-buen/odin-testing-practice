export function analyzeArray(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);

  return {
    average: sum / numbers.length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
}
