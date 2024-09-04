import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic.audio);
  if (props.phonetic) {
    return (
      <div>
        <h3>{props.phonetic.text}</h3>
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
