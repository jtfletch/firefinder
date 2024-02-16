import React, { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { Icon } from "@iconify/react";
import structureIcon from "@iconify/icons-mdi/building";

const StructureMarker = ({ lat, lng, name, location, type }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{ lat: lat, lng: lng }}
      >
        <Icon icon={structureIcon} className="structure-icon" />
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          className="info"
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <div>{type}</div>  
          <div>{name}</div>
          {location}
        </InfoWindow>
      )}
    </>
  );
};

export default StructureMarker;
