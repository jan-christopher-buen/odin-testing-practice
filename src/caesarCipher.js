export function caesarCipher(string, shift) {
  return string.replace(/[a-z]/gi, (letter) => {
    const alphabetStart = (letter === letter.toUpperCase() ? 'A' : 'a').charCodeAt(0);
    const position = letter.charCodeAt(0) - alphabetStart;
    const shiftedPosition = (position + shift) % 26;
    return String.fromCharCode(alphabetStart + shiftedPosition);
  });
}
