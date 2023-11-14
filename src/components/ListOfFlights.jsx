import React, { useState, useEffect } from 'react';
//import axios from 'axios';

function ListOfFlights() {
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredFlightPlan, setFilteredFlightPlan] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '0b42b27c-8d1a-4d71-82c4-302c3ae19c51';
      const flightPlanUrl = `http://118.189.146.180:9080/flight-manager/displayAll?apikey=${apiKey}`;
      try {
        const response = await fetch(flightPlanUrl);
        const allFlightPlans =await response.json();
        const flightIdentifications = allFlightPlans.map((flightPlan) => flightPlan.aircraftIdentification);
        setFilteredFlightPlan(flightIdentifications);
        setLoading(false); // Set loading to false when the data is loaded
      } catch (error) {
        //console.error(error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>View flights on 14 November 2023:</h2>
      {loading ? ( // Display a loading message while data is being fetched
        <p>Loading...</p>
      ) : (
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {filteredFlightPlan.map((str, index) => (
            <option key={index} value={str}>
              {str}
            </option>
          ))}
        </select>
      )}
      <p>You selected: {selectedOption}</p>
    </div>
  );
}

export default ListOfFlights;
