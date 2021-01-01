/**
 * Find a pair within a collection of numbers that is equal to the sum
 * of this pair
 * 
 * @example
 * const pair = findPairEqualToSum([1, 2, 3], 5); // pair = [2, 3]
 * 
 * source: https://www.youtube.com/watch?v=XKu_SEDAykw
 */

function findPair(
  arr: Array<number>, 
  sum: number
): null | boolean | Array<number> {
  // Solution with loop (quadratic)
  // let pair: Array<number> = [];
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === sum) {
  //       pair = [arr[i], arr[j]];
  //     }
  //   }
  // } 
  // return pair;

  // Solution with array iteraction (quadratic)
  // const pair = arr.find((number, index, array) => {
  //   // const slicedArr = arr.slice
  // })

  // Binary Search (logN)

  // Shift (Linear)
  // let low = 0;
  // const high = arr.length - 1;
  // while (low < high) {
  //   console.log(`iteration ${low+1}: arr[low]=${arr[low]} arr[high]=${arr[high]}`)
  //   if (arr[low] + arr[high] === sum) {
  //     return [arr[low], arr[high]];
  //   }
  //   low++; 
  // }

  // complement (liiner)
  // const comp: Array<number> = [];
  // for (const item of arr) {
  //   const compItem = comp.find((compItem) => compItem === item);
  //   if (compItem !== comp[comp.length - 1]) {
  //     return true;
  //   }
  //   comp.push(sum-item);
  // }
  return null;
}

const sortedSequence = [1, 2, 4, 4];
const unsortedSequence = [4, 4, 2, 1];

const invalidSortedSequence = [1, 2, 3, 4];
const unsortedInvalidSequence = [4, 3, 2, 1];

const sum = 8;

console.log(findPair(sortedSequence, sum));
console.log(findPair(invalidSortedSequence, sum));
// console.log(findPair(unsortedSequence, sum));
console.log(findPair(unsortedInvalidSequence, sum));

console.log('\n\n\n Finished');