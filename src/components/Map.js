import { APIProvider, Map } from "@vis.gl/react-google-maps";
import LocationMarker from "./LocationMarker";
import RescueMarker from "./markers/RescueMarker";
import StructureMarker from "./markers/StructureMarker";
import BushfireMarker from "./markers/BushfireMarker";
import FalseMarker from "./markers/FalseMarker";
import OtherMarker from "./markers/OtherMarker";

const LoadMap = ({eventData, cfaData}) => {

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })

    const cfaMarkers = cfaData.map((cfa, index) => {
      if (cfa.latitude !== null && cfa.longitude !== null) {
        if (cfa.incidentType === "RESCUE") {
          return <RescueMarker key={index} lat={cfa.latitude} lng={cfa.longitude} />;
        }
        else if (cfa.incidentType === "STRUCTURE") {
          return <StructureMarker key={index} lat={cfa.latitude} lng={cfa.longitude} />;
        }
        else if (cfa.incidentType === "FALSE") {
          return <FalseMarker key={index} lat={cfa.latitude} lng={cfa.longitude} />;
        }
        else if (cfa.incidentType === "BUSHFIRE") {
          return <BushfireMarker key={index} lat={cfa.latitude} lng={cfa.longitude} />;
        }
        else if (cfa.incidentType === "OTHER") {
          return <OtherMarker key={index} lat={cfa.latitude} lng={cfa.longitude} />;
        }
        else {
          return <LocationMarker key={index} lat={cfa.latitude} lng={cfa.longitude} />;
        }
      }
      return null;
    });

  return (
    <div className="map">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <Map
          defaultZoom={6}
          defaultCenter={{ lat: -38.0735, lng: 145.4851 }}
          gestureHandling={"greedy"}
          mapId={"8095e43d45822679"}
        >
          {markers}
          {cfaMarkers}
        </Map>
      </APIProvider>
    </div>
  );
};

export default LoadMap;
