import React, { useState } from "react";
import WeatherModule from "./components/WeatherModule";
import CurrencyConverter from "./components/CurrencyConverter";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css";

const App = () => {
  const [tab, setTab] = useState("weather");

  return (
    <div className="app">
      <h1>InfoHub</h1>
      <nav>
        <button onClick={() => setTab("weather")}>Weather</button>
        <button onClick={() => setTab("currency")}>Currency</button>
        <button onClick={() => setTab("quote")}>Quote</button>
      </nav>

      {tab === "weather" && <WeatherModule />}
      {tab === "currency" && <CurrencyConverter />}
      {tab === "quote" && <QuoteGenerator />}
    </div>
  );
};

export default App;
