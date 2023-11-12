import { findObjectsWithMultipleCoordinates } from '../components/pickOutMultiple';

describe('findObjectsWithMultipleCoordinates function', () => {
  it('should return objects with multiple coordinates', () => {
    const results = [
      { HSN: [[29.93, 122.36]] },
      { TOGUG: [[29.2, 122.53]] },
      { BEGMO: [[28, 122.83]] },
      { LAPUG: [[1.69, 103.41], [123, 117.38]] },
      { BEBEM: [[22.95, 116.36]] },
      { DOTMI: [[22.72, 116.17]] },
      { MONTA: [[21.56, 116.20], [34.54, 133.16], [10.92, 122.52]] },
      { ARROW: [[-35, 173.83], [19.84, 114.37], [22.36, -155.21]] },
      { EPDOS: [[19, 113.56]] }
    ];

    const expectedResult = [
      { LAPUG: [1.69, 103.41] },
      { MONTA: [21.56, 116.2] },
      { ARROW: [19.84, 114.37] }
    ];

    const result = findObjectsWithMultipleCoordinates(results);
    expect(result).toEqual(expectedResult);
  });

  // Additional test cases should be written to cover scenarios like:
  // - An empty input array
  // - An array where no objects have multiple coordinates
  // - An array with varied data types or structures to test error handling
});
