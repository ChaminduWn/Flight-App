import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FlightResults = () => {
  const location = useLocation();
  const results = location.state?.results || {};
  const flights = results?.data || [];

  if (!Array.isArray(flights) || flights.length === 0) {
    return <div className="p-4">No flight results available.</div>;
  }

  return (
    <>
            <Header />

    
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Flight Search Results</h2>
      <ul className="space-y-4">
        {flights.map((flight, index) => (
          <li key={index} className="p-4 border rounded shadow">
            <p>
              <strong>Flight ID:</strong> {flight.id}
            </p>
            <p>
              <strong>Duration:</strong> {flight.itineraries[0].duration}
            </p>
            <p>
              <strong>Aircraft Code:</strong>{" "}
              {flight.itineraries[0].segments[0].aircraft.code}
            </p>
            <p>
              <strong>Departure:</strong>{" "}
              {flight.itineraries[0].segments[0].departure.at}
            </p>
            <p>
              <strong>Arrival:</strong>{" "}
              {flight.itineraries[0].segments[0].arrival.at}
            </p>
            <p>
              <strong>Price:</strong> ${flight.price.total}
            </p>
          </li>
        ))}
      </ul>

    </div>
    <Footer />
    </>
  );
};

export default FlightResults;
