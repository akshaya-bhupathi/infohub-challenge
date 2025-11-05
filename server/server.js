// server/server.js
// server/server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || "93e7c59315f2e314fbd4360511bc38ce";

// --- Quote API ---
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
];

app.get("/api/quote", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not fetch quote" });
  }
});

// --- Weather API ---
app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "London";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const { temp } = response.data.main;
    const description = response.data.weather[0].description;
    res.json({ temperature: temp, description });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "City not found or API error" });
  }
});

// --- Currency API ---
app.get("/api/convert", async (req, res) => {
  const amount = parseFloat(req.query.amount);
  if (!amount) return res.status(400).json({ message: "Invalid amount" });

  try {
    const response = await axios.get(
      `https://open.er-api.com/v6/latest/INR`
    ); // free exchange API
    const rates = response.data.rates;
    const usd = (amount * rates.USD).toFixed(2);
    const eur = (amount * rates.EUR).toFixed(2);
    res.json({ usd, eur });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Conversion failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
