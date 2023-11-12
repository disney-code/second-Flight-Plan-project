import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axiosMock from 'axios-mock-adapter';
import axios from 'axios';
import FlightPlan from './component/FlightPlan';

describe('FlightPlan Component', () => {
  // Setup axios mock
  let mock = new axiosMock(axios);

  beforeEach(() => {
    mock.reset();
  });

  it('renders without crashing', () => {
    render(<FlightPlan />);
    // additional assertions...
  });

  // More test cases...
});
