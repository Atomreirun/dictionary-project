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
        <footer>
          This project was created by Arlene Runyon and is{" "}
          <a
            href="https://github.com/Atomreirun/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://jazzy-pie-08c7c3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
