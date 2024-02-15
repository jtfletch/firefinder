import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";

import LocationMarker from "./LocationMarker";

const LoadMap = ({eventData}) => {

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })

  return (
    <div className="map">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <Map
          defaultZoom={10}
          defaultCenter={{ lat: 53.54992, lng: 10.00678 }}
          gestureHandling={"greedy"}
          mapId={"8095e43d45822679"}
        >
          {markers}
        </Map>
      </APIProvider>
    </div>
  );
};

export default LoadMap;
