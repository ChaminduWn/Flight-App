import React, { useEffect } from "react"; // Importing React and useEffect
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlightSearch from "../components/FlightSearch";
import { FaPlane, FaSearch } from "react-icons/fa"; // Importing the plane icon from react-icons
import video from "../assets/video.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="w-full h-screen">
          {/* Hero Section */}
          <div className="w-full h-3/5 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./assets/a.jpg')] bg-center bg-cover">
            <Header />
            <div className="flex flex-col h-full pl-10">
              <h1 className="text-white text-4xl font-bold mt-20">
                Explore the World Together
              </h1>
              <h2 className="text-white text-4xl font-bold mt-2 mb-4">
                with Premium Travel
              </h2>
              <button
                type="button"
                className="relative flex items-center justify-center bg-[#72174c] text-white px-4 py-3 rounded-full w-[5.5cm] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Book Now
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-9 w-9 bg-white rounded-full">
                  <FaSearch className="h-3 w-3 text-black opacity-70" />
                </div>
              </button>

              <FlightSearch />
            </div>
          </div>

          {/* White Background Section */}
          <div className="mt-5 w-full bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                {/* Steps Section */}
                <div className="md:w-1/2 mt-32 sm:mt-[470px] md:mt-[3cm] md:pr-8 order-2 md:order-1">
                  <ul className="list-none text-lg space-y-4">
                    <h2 className="text-3xl font-bold mb-8">How it Works</h2>
                    <li>
                      <h5 className="text-gray-500 mb-4">
                        These are the simple procedures that will make your
                        purchasing process super easy and smooth. And will help
                        you to get your flight easily.
                      </h5>
                      <div className="flex items-center mb-4">
                        <FaPlane className="text-purple-600 text-2xl mr-2" />
                        <span className="text-lg">1. Search Flights</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mb-4">
                        <FaPlane className="text-purple-600 text-2xl mr-2" />
                        <span className="text-lg">2. Fill Contact Form</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mb-4">
                        <FaPlane className="text-purple-600 text-2xl mr-2" />
                        <span className="text-lg">3. Choose Your Airline</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mb-4">
                        <FaPlane className="text-purple-600 text-2xl mr-2" />
                        <span className="text-lg">4. Booking in 10 Minutes!</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Image Section */}
                <div className="md:w-1/4 mt-10 md:mt-[3cm] sm:mt-[50px] pt-10 md:pt-0 order-3 md:order-2">
                  <img
                    src={video}
                    alt="Costa Victoria Cochin"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
