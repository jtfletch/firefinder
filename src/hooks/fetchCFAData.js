import { useState, useEffect } from 'react';

const useFetchCFAData = () => {
  const [cfaData, setCfaData] = useState([]);

  useEffect(() => {
    const fetchCFAData = async () => {
      try {
        const CORS_PROXY = 'https://corsproxy.io/?';
        const RSS_FEED_URL = 'https://data.emergency.vic.gov.au/Show?pageId=getIncidentRSS';

        const response = await fetch(CORS_PROXY + RSS_FEED_URL);
        const xmlText = await response.text();

        // Parse the XML text
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'text/xml');

        // Convert XML to JSON
        const items = Array.from(xml.querySelectorAll('item')).map(item => {
          const description = item.querySelector('description').textContent;
          const latitudeMatch = description.match(/<strong>Latitude:<\/strong>\s*(-?\d+\.\d+)/);
          const longitudeMatch = description.match(/<strong>Longitude:<\/strong>\s*(-?\d+\.\d+)/);
        
          return {
            title: item.querySelector('title').textContent,
            lat: latitudeMatch ? parseFloat(latitudeMatch[1]) : null,
            lng: longitudeMatch ? parseFloat(longitudeMatch[1]) : null,
          };
        });

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
