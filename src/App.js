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

library.add(fas, faCirclePlay);

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Dictionary defaultKeyword="Ghoul" />
      </div>
      <footer>
        This project was coded by Belinda Amezquita and it is open source
      </footer>
    </div>
  );
}
