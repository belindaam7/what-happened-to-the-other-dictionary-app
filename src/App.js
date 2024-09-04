import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Dictionary from "./Dictionary";
import "./App.css";
import "./Dictionary.css";
import "./Results.css";
import "./Meaning.css";
import "./Phonetic.css";
import "./Photos.css";

library.add(fas, faCirclePlay);

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Dictionary defaultKeyword="Garbage" />
      </div>
      <footer>
        This project was coded by
        <a
          href="https://web-developer-one-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Belinda Amezquita
        </a>
        , it is open source on
        <a
          href="https://github.com/belindaam7/what-happened-to-the-other-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
        , and hosted by
        <a href="https://app.netlify.com" target="_blank" rel="noreferrer">
          {" "}
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
