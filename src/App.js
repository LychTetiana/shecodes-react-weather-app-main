import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />
        <footer>
        This project was coded by{" "}
          <a href="https://www.linkedin.com/in/tetiana-lych/" 
          target="_blank"
          rel="noopener noreferrer">
            Tetiana Lych
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LychTetiana/shecodes-react-weather-app-main.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
