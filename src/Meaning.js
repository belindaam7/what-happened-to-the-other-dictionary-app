import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>
        {props.meaning.partOfSpeech.toUpperCase(0).charAt(0) +
          props.meaning.partOfSpeech.slice(1)}
      </h5>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].definition.example}</p>
    </div>
  );
}
