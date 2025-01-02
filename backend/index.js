const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/flight-search", async (req, res) => {
  const { departureCity, destinationCity, departureDate, returnDate, passengers, travelClass } = req.body;

  try {
    const tokenResponse = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_API_KEY,
        client_secret: process.env.AMADEUS_API_SECRET,
      })
    );

    const token = tokenResponse.data.access_token;

    const flightResponse = await axios.get(
      `https://test.api.amadeus.com/v2/shopping/flight-offers`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          originLocationCode: departureCity,
          destinationLocationCode: destinationCity,
          departureDate ,
          returnDate,
          adults: passengers,
          travelClass,
        },
      }
    );

    res.json(flightResponse.data);
  } catch (error) {
    console.error("Error fetching flight data:", error.message);
    res.status(500).json({ error: "Failed to fetch flight data" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
