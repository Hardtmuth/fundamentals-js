
const concatStrings = (a, b) => a + b;

const isString = (data) => typeof data === 'string';

const identifySign = (num) => {
  switch (num) {
    case 0:
      return 'Ноль';
    case num < 0:
      return 'Отрицательное число';
    default:
      return 'Положительное число';
  }
};

const reverseWords = (str) => {
  let result = '';
  const splittedStr = str.split(' ');
  for (const word of splittedStr) {
    result = `${word} ${result}`
  }
};

const wordsCount = (str) => str.split(' ').length;
