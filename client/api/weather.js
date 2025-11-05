import axios from "axios";

export default async function handler(req, res) {
  const WEATHER_API_KEY = "93e7c59315f2e314fbd4360511bc38ce";
  const city = req.query.city || "London";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const { temp } = response.data.main;
    const description = response.data.weather[0].description;
    res.status(200).json({ temperature: temp, description });
  } catch (err) {
    res.status(500).json({ message: "City not found or API error" });
  }
}
