/**
 * Given an artibrary collection of numbers, find the matching pair 
 * that it's equal to an artitrary sum
 * 
 * @example
 * const pair = findPairEqualToSum([1, 2, 3], 5); // pair = [2, 3]
 * 
 * source: https://www.youtube.com/watch?v=XKu_SEDAykw
 */

function findPairEqualToSum(arr: Array<number>, sum: number): Array<number> {
  // Solution with loop
  let pair: Array<number> = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pair = [arr[i], arr[j]];
      }
    }
  } 
  return pair;

  // Solution with array iteraction
}

const sequence = [1, 2, 3];
const sum = 5;
const pair = findPairEqualToSum(sequence, sum);
console.log(pair);