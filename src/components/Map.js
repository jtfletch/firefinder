import {
  APIProvider,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";

const LoadMap = () => {
  return (
    <div className="map">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <Map defaultZoom={10} defaultCenter={{ lat: 53.54992, lng: 10.00678 }} gestureHandling={"greedy"}>
          <Marker position={{ lat: 53.54992, lng: 10.00678 }} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default LoadMap;
