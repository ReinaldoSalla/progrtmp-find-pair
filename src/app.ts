interface PairInfo {
  firstItem: number;
  firstItemIndex: number;
  secondItem: number;
  secondItemIndex: number;
}

function findPair(numbers: Array<number>, sum: number) {
  const lookup = new Set(numbers);
  const found = numbers.find((item) => lookup.has(sum-item));
  if (!found) {
    return null;
  }
  const firstItem = found;
  const secondItem = sum - found;
  const result = numbers.reduce((acc, curr, index) => {
    const hasFoundedFirstItem = 'firstItem' in acc;
    const hasFoundedSecondItem = 'secondItem' in acc;
    if (curr === firstItem && !hasFoundedFirstItem) {
      acc.firstItem = firstItem,
      acc.firstItemIndex = index;
    } else if (curr === secondItem && !hasFoundedSecondItem) {
      acc.secondItem = secondItem;
      acc.secondItemIndex = index;
    }
    return acc;
  }, {} as PairInfo);
  return result;
}

// const numbers = [0, 1, 2, 3];
// const sum = 5;

const numbers = [0, 5, 5, 4, 4, 1, 1, 1, 10];
const sum = 2;

// const numbers = Array(1e3).fill(0).map((_, index) => index);
// const penultimateIndex = numbers.length-2;
// const lastIndex = numbers.length-1;
// const sum = numbers[penultimateIndex] + numbers[lastIndex];

console.time('id');
const result = findPair(numbers, sum);
console.timeEnd('id');

console.log(result);
