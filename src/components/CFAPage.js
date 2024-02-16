import React, { useState, useEffect } from 'react';

const CORS_PROXY = 'https://corsproxy.io/?';
const RSS_FEED_URL = 'https://data.emergency.vic.gov.au/Show?pageId=getIncidentRSS';

const CFAPage = () => {
  const [feedData, setFeedData] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
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
            link: item.querySelector('link').textContent,
            lat: latitudeMatch ? parseFloat(latitudeMatch[1]) : null,
            lng: longitudeMatch ? parseFloat(longitudeMatch[1]) : null,
          };
        });

        setFeedData({
          title: xml.querySelector('channel > title').textContent,
          items: items
        });
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchFeed();
  }, []);

  console.log(feedData)

  return (
    <div>
      {feedData ? (
        <div>
          <h2>{feedData.title}</h2>
          <ul>
            {feedData.items.map((entry, index) => (
              <li key={index}>
                <span>
                  <a href={entry.link}>{entry.title}</a>{' '}
                  {entry.lat !== null && entry.lng !== null && (
                    <span style={{ color: 'green' }}>
                      (Lat: {entry.lat}, Lng: {entry.lng})
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CFAPage;
