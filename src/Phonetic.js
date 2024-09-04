import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-circle-play" /> Listen
          </a>
        </button>
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
