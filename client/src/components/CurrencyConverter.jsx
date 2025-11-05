import React, { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convertCurrency = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/convert?amount=${amount}`
      );
      setResult(res.data);
    } catch {
      setError("Conversion failed");
    }
    setLoading(false);
  };

  return (
    <section>
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter INR amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={convertCurrency}>Convert</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <p>USD: {result.usd}</p>
          <p>EUR: {result.eur}</p>
        </div>
      )}
    </section>
  );
};

export default CurrencyConverter;
