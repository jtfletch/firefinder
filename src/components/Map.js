import { APIProvider, Map, AdvancedMarker, customMarker } from "@vis.gl/react-google-maps";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LoadMap = () => {
  return (
    <div className="map">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <Map
          defaultZoom={10}
          defaultCenter={{ lat: 53.54992, lng: 10.00678 }}
          gestureHandling={"greedy"}
          mapId={"8095e43d45822679"}
        >
          <AdvancedMarker 
            position={{ lat: 68.54992, lng: 10.00678 }}>
            <Icon icon={locationIcon} className="location-icon" />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
};

export default LoadMap;
