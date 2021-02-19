interface PairInfo {
  firstNumber?: number;
  firstNumberIndex?: number;
  secondNumber?: number;
  secondNumberIndex?: number;
}

// function findPair(numbers: Array<number>, sum: number) {
//   const lookup = new Set();
//   let secondNumber;
//   for (let i = 0; i < numbers.length; i++) {
//     if (lookup.has(sum - numbers[i])) {
//       secondNumber = numbers[i];
//       break;
//     }
//     lookup.add(numbers[i])
//   }
//   if (!secondNumber) {
//     return null;
//   }
//   const firstNumber = sum - secondNumber;
//   const pairInfo: PairInfo = {};
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === firstNumber && !('firstNumber' in pairInfo)) {
//       pairInfo.firstNumber = numbers[i];
//       pairInfo.firstNumberIndex = i;
//     } else if (numbers[i] === secondNumber && !('secondNumber' in pairInfo)) {
//       pairInfo.secondNumber = numbers[i];
//       pairInfo.secondNumberIndex = i;
//     }
//     if ('firstNumber' in pairInfo && 'secondNumber' in pairInfo) {
//       return pairInfo;
//     }
//   }
// }

function findPair(numbers: Array<number>, sum: number) {
  const lookup = new Set();
  const found = numbers.find((item) => {
    if (lookup.has(sum - item)) {
      return true;
    }
    lookup.add(item)
  });
  if (!found) {
    return null;
  }
  const secondNumber = found;
  const firstNumber = sum - found;
  const pairInfo = numbers.reduce((acc: PairInfo, curr, index) => {
    if (curr === firstNumber && !('firstNumber' in acc)) {
      acc.firstNumber = curr;
      acc.firstNumberIndex = index;
    } else if (curr === secondNumber && !('secondNumber' in acc)) {
      acc.secondNumber = curr;
      acc.secondNumberIndex = index;
    }
    return acc;
  }, {});
  return pairInfo;
}

// const numbers = [0, 1, 2, 3];
// const sum = 5;

const numbers = [0, 5, 5, 4, 4, 1, 1, 1, 10];
const sum = 2;

// const numbers = [0, 5, 5, 4, 4, 1, 1, 2, 10];
// const sum = 4;

// const numbers = [1, 1];
// const sum = 100;

// const numbers = Array(10e6).fill(0).map((_, index) => index);
// const penultimateIndex = numbers.length-2;
// const lastIndex = numbers.length-1;
// const sum = numbers[penultimateIndex] + numbers[lastIndex];

// console.time('findPair');
const result = findPair(numbers, sum);
// console.timeEnd('findPair');

console.log(result);

export default findPair;