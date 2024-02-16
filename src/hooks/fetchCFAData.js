import { useState, useEffect } from 'react';

const useFetchCFAData = () => {
  const [cfaData, setCfaData] = useState([]);

  useEffect(() => {
    const fetchCFAData = async () => {
      try {
        const JSON_FEED_URL = 'https://data.emergency.vic.gov.au/Show?pageId=getIncidentJSON';

        const response = await fetch(JSON_FEED_URL);
        const jsonData = await response.json();

        // Process JSON data
        const items = jsonData.results.map(result => ({
          title: result.name,
          lat: result.latitude,
          lng: result.longitude,
          type: result.incidentType,
        }));

        setCfaData(items);
      } catch (error) {
        console.error('Error fetching CFA data:', error);
      }
    };

    fetchCFAData();
  }, []);

  return cfaData;
};

export default useFetchCFAData;
