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
      if (cfa.lat !== null && cfa.lng !== null) {
        if (cfa.type === "RESCUE") {
          return <RescueMarker key={index} lat={cfa.lat} lng={cfa.lng} />;
        }
        else if (cfa.type === "STRUCTURE") {
          return <StructureMarker key={index} lat={cfa.lat} lng={cfa.lng} />;
        }
        else if (cfa.type === "FALSE") {
          return <FalseMarker key={index} lat={cfa.lat} lng={cfa.lng} />;
        }
        else if (cfa.type === "BUSHFIRE") {
          return <BushfireMarker key={index} lat={cfa.lat} lng={cfa.lng} />;
        }
        else if (cfa.type === "OTHER") {
          return <OtherMarker key={index} lat={cfa.lat} lng={cfa.lng} />;
        }
        else {
          return <LocationMarker key={index} lat={cfa.lat} lng={cfa.lng} />;
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
