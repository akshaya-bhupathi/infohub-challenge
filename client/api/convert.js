import axios from "axios";

export default async function handler(req, res) {
  const amount = parseFloat(req.query.amount);
  if (!amount) return res.status(400).json({ message: "Invalid amount" });

  try {
    const response = await axios.get("https://open.er-api.com/v6/latest/INR");
    const rates = response.data.rates;
    const usd = (amount * rates.USD).toFixed(2);
    const eur = (amount * rates.EUR).toFixed(2);
    res.status(200).json({ usd, eur });
  } catch {
    res.status(500).json({ message: "Conversion failed" });
  }
}
