import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadMap from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import CFAPage from "./components/CFAPage";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div>
        <Routes>
          <Route path="/cfa" element={<CFAPage/>} />
          <Route
            path="/"
            element={!loading ? <LoadMap eventData={eventData} /> : <Loader />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
