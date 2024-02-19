// LoadMap.test.js
import React from 'react';
import { render } from '@testing-library/react';
import LoadMap from './LoadMap';

// Mock APIProvider and Map components
jest.mock('@vis.gl/react-google-maps', () => ({
  APIProvider: jest.fn(({ children }) => <div>{children}</div>),
  Map: jest.fn(({ children }) => <div>{children}</div>)
}));

describe('LoadMap Component', () => {
  it('renders map with markers', () => {
    const eventData = [{ id: 1, geometries: [{ coordinates: [1, 1] },], categories: [{ id: 8 }] }];
    const cfaData = [{ id: 1, latitude: 1, longitude: 1, incidentType: "RESCUE" }];
    
    const { getByTestId } = render(<LoadMap eventData={eventData} cfaData={cfaData} />);
    
    // Assert that map component is rendered
    expect(APIProvider).toHaveBeenCalled();
    expect(Map).toHaveBeenCalled();
    
    // Assert that markers are rendered
    expect(getByTestId('location-marker')).toBeInTheDocument();
    expect(getByTestId('rescue-marker')).toBeInTheDocument();
  });
});
