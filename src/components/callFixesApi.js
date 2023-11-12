// type can be fixes or navaids
// term can be KAT (navaids) or NELON (fixes)
async function apiCallNavFixAirport(type, term) {
	const apiKey = '0b42b27c-8d1a-4d71-82c4-302c3ae19c51';
	const apiUrl = `http://118.189.146.180:9080/geopoints/search/${type}/${term}?apikey=${apiKey}`;
      
	try {
	  const response = await fetch(apiUrl);
	  
	  if (response.ok) {
	    const data = await response.json();
	    // data can be ["PKU (0.43,101.44)"]
	    return data;
	  } else {
	    throw new Error('Request failed with status ' + response.status);
	  }
	} catch (error) {
	  return { error: error.message };
	}
      }



export { apiCallNavFixAirport };

// used by FlightPlans.jsx