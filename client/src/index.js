import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


// WEATHER API ENDPOINT
app.get("/api/weather", async (req, res) => {
const { city } = req.query;
try {
const response = await axios.get(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
);
res.json(response.data);
} catch (error) {
res.status(400).json({ error: "Unable to fetch weather data" });
}
});


// CURRENCY CONVERTER API ENDPOINT
app.get("/api/convert", async (req, res) => {
const { amount, to } = req.query;
try {
const rates = { USD: 0.012, EUR: 0.011 };
const converted = (amount * rates[to]).toFixed(2);
res.json({ converted });
} catch (error) {
res.status(400).json({ error: "Currency conversion failed" });
}
});


// QUOTE GENERATOR ENDPOINT
app.get("/api/quote", async (req, res) => {
try {
const quotes = [
"Believe you can and you're halfway there.",
"Act as if what you do makes a difference. It does.",
"Success is not how high you have climbed, but how you make a positive difference.",
"Keep your face always toward the sunshine—and shadows will fall behind you.",
"You are never too old to set another goal or to dream a new dream."
];
const random = quotes[Math.floor(Math.random() * quotes.length)];
res.json({ quote: random });
} catch (error) {
res.status(500).json({ error: "Could not fetch quote" });
}
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));