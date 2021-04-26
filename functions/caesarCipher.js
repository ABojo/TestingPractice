const shiftChar = (charNum, shiftNum, lastCharNum) => {
  return charNum + shiftNum <= lastCharNum
    ? charNum + shiftNum
    : charNum + shiftNum - 26;
};

const shiftCodes = (charCodes, shiftNum) => {
  const upperZCode = 90;
  const lowerZCode = 122;

  return charCodes.map((charNum) => {
    if (charNum === 32) return 32;
    if (charNum <= upperZCode) return shiftChar(charNum, shiftNum, upperZCode);
    if (charNum <= lowerZCode) return shiftChar(charNum, shiftNum, lowerZCode);
  });
};

const caesarCipher = (string, shiftNum) => {
  const charCodes = string.split('').map((letter) => letter.charCodeAt(0));
  const newCodes = shiftCodes(charCodes, shiftNum);
  const cipherString = String.fromCharCode(...newCodes);

  return cipherString;
};

module.exports = caesarCipher;
