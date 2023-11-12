import fetchMock from 'jest-fetch-mock';
import {apiCallNavFixAirport} from '../components/callFixesApi';

fetchMock.enableMocks();


describe('apiCallNavFixAirport', () => {
	beforeEach(() => {
	  fetchMock.resetMocks();
	});
      
	it('returns data on a successful response navaids', async () => {
	  const mockData =["PKU (0.43,101.44)"] ;
	  fetchMock.mockResponseOnce(JSON.stringify(mockData));
      
	  const result = await apiCallNavFixAirport("navaids", "pku");
	  expect(result).toEqual(mockData);
	});

	it('returns data on a successful response for fixes', async () => {
		const mockData =["BEGMO (28.00,121.83)"] ;
		fetchMock.mockResponseOnce(JSON.stringify(mockData));
	    
		const result = await apiCallNavFixAirport("fixes", "begmo");
		expect(result).toEqual(mockData);
	      });
	      it('returns data on a successful response for airports', async () => {
		const mockData =["YPPH (-31.94,115.97)"] ;
		fetchMock.mockResponseOnce(JSON.stringify(mockData));
	    
		const result = await apiCallNavFixAirport("airports", "ypph");
		expect(result).toEqual(mockData);
	      });
	

});