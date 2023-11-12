import {replaceObjects} from '../components/cleanUpPointsNoduplicate';

describe('replaceObjects function',()=>{
it('should correctly replace objects whose array have more than 1 array',()=>{
	const resultObjects = [
	{ KAT: [[13.03, 7.69], [-33.71, 150.3], [7.16, 79.87]] },
	{ SULEN: [[4.41, 90.4]] },
	{ OKABU: [[3.27, 94.85], [3.27, 94.85]] },
	{ ARAMA: [[-33.71, 150.3]] }
      ];
      const finalArray = [{ KAT: [7.16, 79.87] }, { OKABU: [3.27, 94.85] }];

      const expectedOutput=[
	{ KAT: [ 7.16, 79.87 ] },
	{ SULEN: [ 4.41, 90.4 ] },
	{ OKABU: [ 3.27, 94.85 ] },
	{ ARAMA: [ -33.71, 150.3 ] }
      ];

      const result = replaceObjects(resultObjects, finalArray);
      expect(result).toEqual(expectedOutput);
})

it("should handle edge case Y correctly", ()=>{
	const resultObjects = [
		{ KAT: [[-33.71, 150.3]] },
		{ SULEN: [[4.41, 90.4]] },
		{ OKABU: [[3.27, 94.85]] },
		{ ARAMA: [[-33.71, 150.3]] }
	      ];
	const finalArray = [];
	const expectedOutput=[
		{ KAT: [ -33.71, 150.3 ] },
		{ SULEN: [ 4.41, 90.4 ] },
		{ OKABU: [ 3.27, 94.85 ] },
		{ ARAMA: [ -33.71, 150.3 ] }
	      ]
	const result = replaceObjects(resultObjects, finalArray);
	expect(result).toEqual(expectedOutput);
})
it("should handle edge case where all points have multiple coordinates", ()=>{
	const resultObjects = [
		{ KAT: [[-33.71, 150.3],[1,2]] },
		{ SULEN: [[4.41, 90.4],[1,2]] },
		{ OKABU: [[3.27, 94.85],[1,2]] },
		{ ARAMA: [[-33.71, 150.3],[2,4]] }
	      ];
	const finalArray = [{ KAT: [-33.71, 150.3]},
	      { SULEN: [4.41, 90.4]},
	      { OKABU: [3.27, 94.85]},
	      { ARAMA: [-33.71, 150.3]}
	      ];
	const expectedOutput=[
		{ KAT: [ -33.71, 150.3 ] },
		{ SULEN: [ 4.41, 90.4 ] },
		{ OKABU: [ 3.27, 94.85 ] },
		{ ARAMA: [ -33.71, 150.3 ] }
	      ]
	const result = replaceObjects(resultObjects, finalArray);
	expect(result).toEqual(expectedOutput);
})

})