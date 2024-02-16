import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadMap from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import CFAPage from "./components/CFAPage";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetchEventData from "./hooks/fetchEventData";
import useFetchCFAData from "./hooks/fetchCFAData";


function App() {
  const { eventData, loading: eventLoading } = useFetchEventData();
  const cfaData = useFetchCFAData();

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
            element={!eventLoading ? <LoadMap eventData={eventData} cfaData={cfaData} /> : <Loader />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
