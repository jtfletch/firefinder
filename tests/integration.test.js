// App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

jest.mock('./hooks/fetchEventData');
jest.mock('./hooks/fetchCFAData');

describe('App Component', () => {
  it('renders map after fetching data', async () => {
    // Mocked eventData and cfaData
    const eventData = [{ id: 1, geometries: [{ coordinates: [1, 1] },], categories: [{ id: 8 }] }];
    const cfaData = [{ id: 1, latitude: 1, longitude: 1, incidentType: "RESCUE" }];
    
    // Mocked hooks return data after fetching
    require('./hooks/fetchEventData').useFetchEventData.mockReturnValueOnce({ eventData, loading: false });
    require('./hooks/fetchCFAData').useFetchCFAData.mockReturnValueOnce(cfaData);
    
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Loader should not be present
    expect(getByTestId('map')).toBeInTheDocument();

    // Wait for map to be rendered
    await waitFor(() => {
      expect(getByTestId('map')).toBeInTheDocument();
    });
  });
});
