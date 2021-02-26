import findPair from './app';

describe('findPair', () => {
  // arrange global
  const numbers = Array(1000).fill(0).map((_, index) => index);

  it('Should return the pair information if the sequence has a pair equal to the target sum', () => {
    //arrange
    const penultimateIndex = numbers.length-2;
    const lastIndex = numbers.length-1;
    const sum = numbers[penultimateIndex] + numbers[lastIndex];
    const mockedResult = {
      firstNumber: numbers[penultimateIndex],
      firstNumberIndex: penultimateIndex,
      secondNumber: numbers[lastIndex],
      secondNumberIndex: lastIndex
    };

    // act
    const result = findPair(numbers, sum);

    //assert
    expect(result).toStrictEqual(mockedResult);
  });

  it('Should return null is the sequence does not have a pair equal to the target sum', () => {
    // arrange
    const sum = 0;
    const mockResult = null;

    // act
    const result = findPair(numbers, sum);

    // assert
    expect(result).toBe(mockResult);
  });
});