import React, { useState } from "react";
import axios from "axios";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getQuote = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/quote");
      setQuote(res.data.quote);
    } catch {
      setError("Could not fetch quote");
    }
    setLoading(false);
  };

  return (
    <section>
      <h2>Motivational Quote</h2>
      <button onClick={getQuote}>Get Quote</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {quote && <p>"{quote}"</p>}
    </section>
  );
};

export default QuoteGenerator;
