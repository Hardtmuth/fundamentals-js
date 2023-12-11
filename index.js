
const concatStrings = (a, b) => a + b;

const isString = (data) => typeof data === 'string';

const identifySign = (num) => {
  if (num === 0) {
    return 'Ноль';
  } else if (num < 0) {
    return 'Отрицательное число';
  } else {
    return 'Положительное число';
  }
};

const reverseWords = (str) => {
  let result = '';
  const splittedStr = str.split(' ');
  for (const word of splittedStr) {
    result = `${word} ${result}`
  }
  return result.trim();
};

const wordsCount = (str) => {
  if (str.length === 0) {
    return 0;
  } else {
    return str.split(' ').length;
  }
};

export { concatStrings, isString, identifySign, reverseWords, wordsCount };