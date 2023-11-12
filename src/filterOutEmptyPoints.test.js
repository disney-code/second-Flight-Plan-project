import { filterOutEmptyPoints } from './components/filterOutEmptyPoints';

describe('filterOutEmptyPoints function', () => {
  it('should filter out objects with empty point arrays', () => {
    const data = [
      { RIC: [[1, 2], [3, 4]] },
      { ENPAG: [[]] },
      { VINAX: [[-12, 34]] }
    ];
    const expectedResult = [
      { RIC: [[1, 2], [3, 4]] },
      { VINAX: [[-12, 34]] }
    ];

    const result = filterOutEmptyPoints(data);
    expect(result).toEqual(expectedResult);
  });

  // Test case for an empty input
  it('should return an empty array if all elements have empty point arrays', () => {
    const data = [{ ENPAG: [[]] }];
    expect(filterOutEmptyPoints(data)).toEqual([]);
  });

  // Test case for input with no empty point arrays
  it('should return the same array if no elements have empty point arrays', () => {
    const data = [{ RIC: [[1, 2]] }, { VINAX: [[-12, 34]] }];
    expect(filterOutEmptyPoints(data)).toEqual(data);
  });

  
});
