import { useState, useEffect } from "react";
import LoadMap from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
  <div>
    <header>
      <Header />
    </header>
    <div>{!loading ? <LoadMap eventData={eventData} /> : <Loader />}</div>;
  </div>
  )
}

export default App;
