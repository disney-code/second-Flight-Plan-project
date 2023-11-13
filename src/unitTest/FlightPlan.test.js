import React from 'react';

import { screen,render, fireEvent, waitFor } from '@testing-library/react';
import FlightPlan from '../components/FlightPlans.jsx'; // Replace with your actual component
jest.mock('react-leaflet');
// global.fetch = jest.fn();
test('renders the flight path when a flight number is submitted', async () => {
  // global.fetch.mockResolvedValueOnce({
  //   json: async () => ({ dataNotFound: true }),
  // });
  const dataNotFound = true;
  const submitClicked = true;

  render(<FlightPlan dataNotFound={dataNotFound} submitClicked={submitClicked}/>);

  // Assuming you have a label connected to the input for accessibility
  //const flightInput = screen.getByLabelText(/enter a flight number/i);
  //getByLabelText is used to select the input field 
  // fireEvent.change(flightInput, { target: { value: 'SIA215' } });
  //fireEvent.change is used to simulate a user typing into the input
  //expect(flightInput.value).toBe('SIA215');
  //const submitButton = screen.getByText(/submit/i);
  // assign the element to the variable called submitButton
  //fireEvent.click(submitButton);
  // const mapElement =await screen.findByText(/Flight route for this flight is not known./i);

  // // Assert that the mapElement contains the expected text when dataNotFound is true
  // expect(mapElement).toHaveTextContent('Flight route for this flight is not known.');
  await waitFor(() => {
    const errorMessage = screen.getByText("Flight route for this flight is not known.");
    expect(errorMessage).toBeInTheDocument();
  });
});
  
  //expect(await screen.findByText(/Flight route for this flight is not known./i)).toBeInTheDocument();


  
