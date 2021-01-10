/**
 * Find a pair of items inside an array whose sum equals a target number
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
  // Solution with two loop (quadratic)
  // let pair: Array<number> = [];
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === sum) {
  //       pair = [arr[i], arr[j]];
  //     }
  //   }
  // } 
  // return pair;

  // Solution with array iteraction .find
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
  // const comp = [sum-arr[0]];
  // for (const item of arr.slice(1)) {
  //   console.log(`arrItem = ${item}, compArr = ${comp}`);
  //   const found = comp.find((compItem) => compItem === item);
  //   if (found) {
  //     return [item, found];
  //   }
  //   comp.push(sum-item);
  // }
  return false;
}

const sequence = [1, 4, 4, 1];
const sum = 8;

const yes = findPair(sequence, sum);

console.log(yes);

console.log('\n\n\n Finished');