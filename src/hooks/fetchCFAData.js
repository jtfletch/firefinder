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
          incidentNo: result.incidentNo,
          lastUpdateDateTime: result.lastUpdateDateTime,
          originDateTime: result.originDateTime,
          incidentType: result.incidentType,
          incidentLocation: result.incidentLocation,
          incidentStatus: result.incidentStatus,
          incidentSize: result.incidentSize,
          name: result.name,
          territory: result.territory,
          resourceCount: result.resourceCount,
          latitude: result.latitude,
          longitude: result.longitude,
          eventCode: result.eventCode,
          fireDistrict: result.fireDistrict,
          municipality: result.municipality,
          category1: result.category1,
          category2: result.category2,
          feedType: result.feedType,
          agency: result.agency,
          originStatus: result.originStatus,
          createdDt: result.createdDt,
          lastUpdatedDt: result.lastUpdatedDt,
          lastUpdatedDtStr: result.lastUpdatedDtStr,
          originDateTimeStr: result.originDateTimeStr,
          catg1CssClass: result.catg1CssClass,
          incidentSizeFmt: result.incidentSizeFmt,
          type: result.type,
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
