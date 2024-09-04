import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5 className="fst-italic">
        {props.meaning.partOfSpeech.toUpperCase(0).charAt(0) +
          props.meaning.partOfSpeech.slice(1)}
      </h5>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms}/>
            </p>
          </div>
        );
      })}
    </div>
  );
}
