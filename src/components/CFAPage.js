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
        const items = Array.from(xml.querySelectorAll('item')).map(item => ({
          title: item.querySelector('title').textContent,
          link: item.querySelector('link').textContent
        }));

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

  return (
    <div>
      {feedData ? (
        <div>
          <h2>{feedData.title}</h2>
          <ul>
            {feedData.items.map((entry, index) => (
              <li key={index}>
                <a href={entry.link}>{entry.title}</a>
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
