import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaUser,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

const FlightSearch = () => {
  const [formData, setFormData] = useState({
    departureCity: "",
    destinationCity: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    travelClass: "BUSINESS",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    if (!formData.departureDate) {
      alert("Please specify a departure date.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/flight-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Flight search results:", data);

      navigate("/results", { state: { results: data } });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while searching for flights. Please try again.");
    }
  };

  return (
    <>
      {/* Travel Class Buttons */}
      <div className="flex justify-center mt-10">
        <button
          className={`py-3 px-10 text-lg font-semibold ${
            formData.travelClass === "BUSINESS"
              ? "bg-[#72174c] text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-l-lg`}
          onClick={() => setFormData({ ...formData, travelClass: "BUSINESS" })}
        >
          Business Class
        </button>
        <button
          className={`py-3 px-12 text-lg font-semibold ${
            formData.travelClass === "FIRST"
              ? "bg-[#72174c] text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-r-lg`}
          onClick={() => setFormData({ ...formData, travelClass: "FIRST" })}
        >
          First Class
        </button>
      </div>

      {/* Main form box */}
      <div
        className="w-full p-6 rounded-lg shadow-lg max-w-4xl mx-auto bg-white"
        style={{ maxWidth: "90%" }}
      >
        {/* Trip Type Buttons */}
        <div className="flex justify-center mb-6 ">
          <button className="py-2 px-4 text-lg font-semibold bg-white text-red-900 border border-gray-300 rounded-l-lg">
            One Way
          </button>
          <button className="py-2 px-4 text-lg font-semibold bg-gray-200 border-gray-300 text-gray-700">
            Round Trip
          </button>
          <button className="py-2 px-4 text-lg font-semibold bg-gray-200 border-gray-300 text-gray-700 rounded-r-lg">
            Multicity
          </button>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center mb-6">
          {/* Departure City */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Departure City</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:ring-2 focus-within:ring-pink-500">
              <FaPlaneDeparture className="text-xl text-gray-500" />
              <select
                name="departureCity"
                value={formData.departureCity || "PAR"}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700 ml-2"
              >
                <option value="PAR">PAR | Paris</option>
                <option value="DXB">DXB | Dubai</option>
                <option value="NYC">NY | New York</option>
                <option value="LHR">LHR | London</option>
                <option value="SYD">SYD | Sydney</option>
                <option value="BOS">BOS | Boston</option>
              </select>
            </div>
          </div>

          {/* Destination City */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Destination City</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:ring-2 focus-within:ring-pink-500">
              <FaPlaneArrival className="text-xl text-gray-500" />
              <select
                name="destinationCity"
                value={formData.destinationCity || "LHR"}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700 ml-2"
              >
                <option value="LHR">LHR | London</option>
                <option value="DXB">DXB | Dubai</option>
                <option value="NYC">NY | New York</option>
                <option value="SYD">SYD | Sydney</option>
                <option value="BOS">BOS | Boston</option>
                <option value="PAR">PAR | Paris</option>
              </select>
            </div>
          </div>

          {/* Departure Date */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Departure Date</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:ring-2 focus-within:ring-pink-500">
              <FaCalendarAlt className="text-xl text-gray-500" />
              <input
                type="date"
                name="departureDate"
                onChange={handleChange}
                value={formData.departureDate || "2025-01-02"}
                className="w-full bg-transparent outline-none text-gray-700 ml-2"
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Return Date</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:ring-2 focus-within:ring-pink-500">
              <FaCalendarAlt className="text-xl text-gray-500" />
              <input
                type="date"
                name="returnDate"
                onChange={handleChange}
                value={formData.returnDate || "2025-01-12"}
                className="w-full bg-transparent outline-none text-gray-700 ml-2"
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Passengers</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:ring-2 focus-within:ring-pink-500">
              <FaUser className="text-xl text-gray-500" />
              <input
                name="passengers"
                type="number"
                min="1"
                onChange={handleChange}
                value={formData.passengers || 2}
                className="w-full bg-transparent outline-none text-gray-700 ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center transform -translate-y-1/2 ">
        <button
          type="button"
          onClick={handleSearch}
          className="relative flex items-center justify-center bg-[#72174c] text-white px-8 py-3 rounded-full pr-16 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Search Flight
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-9 w-9 bg-white rounded-full">
            <FaSearch className="h-3 w-3 text-black opacity-70" />
          </div>
        </button>
      </div>
    </>
  );
};

export default FlightSearch;
