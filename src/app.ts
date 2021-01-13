/**
 * Find a pair of items inside an array whose sum equals a target number
 * 
 * @example
 * const pair = findPairEqualToSum([1, 2, 3], 5); // pair = [2, 3]
 * 
 * source: https://www.youtube.com/watch?v=XKu_SEDAykw
 * 
 * links
 * https://stackoverflow.com/questions/55363509/does-this-javascript-function-have-a-linear-or-quadratic-time-complexity
 * https://stackoverflow.com/questions/55057200/is-the-set-has-method-o1-and-array-indexof-on
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

  // my solution, for of + find (quadratic)
  // for (const [index, item] of arr.slice(0, arr.length-1).entries()) {
  //   // console.log(`iterating item ${item}`);
  //   const found = arr.slice(index + 1).find((arrItem) => arrItem === sum - item);
  //   if (found) {
  //     return [item, found];
  //   }
  // }
  // return null;

  // for + set = O(n) + 0(1), linear
  // const set = new Set([arr[0]]);
  // for (const item of arr.slice(1)) {
  //   if (set.has(item)) {
  //     return true;
  //   }
  //   set.add(sum-item);
  // }

  // const complements = new Set([sum-arr[0]]);
  // return arr.slice(1).some((item) => {
  //   console.log(`iterating item ${item}`);
  //   if (complements.has(item)) {
  //     return true;
  //   }
  //   complements.add(sum-item);
  // })    

  // const complements = new Set([sum-arr[0]]);
  // return arr.slice(1).some((item) => {
  //   console.log(`iterating item ${item}`);
  //   return complements.has(item) || !complements.add(sum-item);
  // })    

  // const complements = new Set([sum-arr[0]]);
  // return arr.slice(1).some((item) => (
  //   complements.has(item) || !complements.add(sum-item)
  // ));

  const complements = new Set([sum-arr[0]]);
  const found = arr.slice(1).find((item) => {
    // console.log(`iterating item ${item}`);
    if (complements.has(item)) {
      return true;
    }
    complements.add(sum-item);
  });
  return found ? [found, sum-found] : null; 
}

// const sequence = [1, 2, 4, 2, 6];
// const sum = 6;

const sequence = Array(1e3).fill(0).map((_, index) => index);
const penultimateIndex = sequence.length-2;
const lastIndex = sequence.length-1;
const sum = sequence[penultimateIndex] + sequence[lastIndex];

console.time('id');
const yes = findPair(sequence, sum);
console.timeEnd('id');

console.log(yes);

console.log('\n\n\n Finished');