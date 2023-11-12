// findClosestPoint is a function that returns the most logical cooridinate of a point out of all its possible
// coordinates

import { findClosestPoint } from './components/shortestDist'

describe('findClosestPoint function', () => {
  it('should return the closest point', () => {
    const NAVAID_COORDINATES = {
      KAT: [
        [7.48, 28.31],
        [-30.55, 116.63]
      ]
    };
    const WAYPOINT_COORDINATES = [-31.42, 116.29];
    
    const expectedResult = { KAT: [-30.55, 116.63] };

    const result = findClosestPoint(NAVAID_COORDINATES, WAYPOINT_COORDINATES);
    expect(result).toEqual(expectedResult);
  });

  
});
