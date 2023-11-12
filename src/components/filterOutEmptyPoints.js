function filterOutEmptyPoints(data) {
	return data.filter(item => {
	  for (const key in item) {
	    const value = item[key];
	    if (Array.isArray(value) && value.length === 1 && value[0].length === 0) {
	      return false; // Exclude objects with an empty array
	    }
	  }
	  return true; // Include objects with non-empty arrays or other values
	});
      }

export {filterOutEmptyPoints};


// const data = [{RIC:[[1,2],[3,4]]},{VINAX:[[-12,34]]}]
// console.log(filterOutEmptyPoints(data))
//const data = [{ENPAG:[[]]}]
//const data = [{RIC:[[1,2],[3,4]]},{ENPAG:[[]]},{VINAX:[[-12,34]]}]

//filterOutEmptyPoints(data) returns [{RIC:[[1,2],[3,4]]},{VINAX:[[-12,34]]}]
// this function can return [] too if data=[{ENPAG:[[]]}]
// this function returns [{RIC:[[1,2],[3,4]]},{VINAX:[[-12,34]]}] if data = [{RIC:[[1,2],[3,4]]},{VINAX:[[-12,34]]}]