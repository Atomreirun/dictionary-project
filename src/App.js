import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>🌠✶ 🎀 𝒟𝒾𝒸𝓉𝒾♡𝓃𝒶𝓇𝓎 🎀 ✶🌠</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Arlene Runyon</footer>
      </div>
    </div>
  );
}
