// this function is to use when there are more than one coordinate associated with a fixes or navaid

function calculateDistance(coord1, coord2) {
	const [lat1, lon1] = coord1;
	const [lat2, lon2] = coord2;
	const R = 6371; // Earth's radius in kilometers
      
	const lat1Rad = (lat1 * Math.PI) / 180;
	const lon1Rad = (lon1 * Math.PI) / 180;
	const lat2Rad = (lat2 * Math.PI) / 180;
	const lon2Rad = (lon2 * Math.PI) / 180;
      
	const dLat = lat2Rad - lat1Rad;
	const dLon = lon2Rad - lon1Rad;
      
	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	  Math.cos(lat1Rad) * Math.cos(lat2Rad) *
	  Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const distance = R * c;
      
	return distance;
      }
      
function findClosestPoint(multi_coordinates_point, single_coordiante_point) {
	//who calls findClosestCoordinate? pickOutMultiple.jsx
	
	let closestCoordinate = null;
	let minDistance = Number.MAX_VALUE;
      
	for (const key in multi_coordinates_point) {
	  if (Object.prototype.hasOwnProperty.call(multi_coordinates_point, key)) {
	    const coordinates = multi_coordinates_point[key];
	    for (const coord of coordinates) {
	      const distance = calculateDistance(coord, single_coordiante_point);
	      if (distance < minDistance) {
		minDistance = distance;
		closestCoordinate = {
		  [key]: coord,
		  
		};
	      }
	    }
	  }
	}
      
	return closestCoordinate;
	//closestCoordinate looks like { OKABU: [ 3.27, 94.85 ] }
      }
      

export {  findClosestPoint };
// const multi_coordinates_point = {
// 	KAT: [
// 		[7.48, 28.31],
// 		[-30.55, 116.63]
// 	],
//       };
//       const single_coordiante_point =  [-31.42, 116.29]
//       console.log("look below:")
// console.log(findClosestPoint(multi_coordinates_point, single_coordiante_point))

//findClosestPoint(multi_coordinates_point, single_coordiante_point)={ KAT: [ -30.55, 116.63 ] }
//for SIA242, it is giving error because the first one the one with multiple coordinate
//multi_coordinates_point ={RIC:[
//[37.5, -77.32],[-33.61, 150.8],[-33.6, 150.78]
//]}
//single_coordiante_point =[]

