import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
      
      <div className="Meaning">

      {props.meaning.definitions.map(function (definition, index) {
          return (
              <div key={index}>
                  <section>
      <h3 className="fst-italic">
        {props.meaning.partOfSpeech.toUpperCase(0).charAt(0) +
          props.meaning.partOfSpeech.slice(1)}
      </h3>
            
              <strong>Definition:</strong> {definition.definition}
              <br />
              <br />
              <em>{definition.example}</em>
              <br />

              <Synonyms synonyms={definition.synonyms} />
            
    </section>
          </div>
        );
    })}
    </div>
  );
}
