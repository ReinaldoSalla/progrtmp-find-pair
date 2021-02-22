interface PairInfo {
  firstNumber?: number;
  firstNumberIndex?: number;
  secondNumber?: number;
  secondNumberIndex?: number;
}

// using for loops
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

// using Array.find and Array.reduce
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

const numbers = [0, 5, 5, 4, 4, 1, 1, 1, 10];
const sum = 2;

const result = findPair(numbers, sum);

// console.log(result);

export default findPair;