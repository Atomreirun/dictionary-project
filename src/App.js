import React from "react";
import Dictionary from "./Dictionary";
import dictionary from "./dictionary.png";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="App-dictionary img=fluid"
            alt="dictionary"
            width="400"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">Coded by Arlene Runyon</footer>
      </div>
    </div>
  );
}
