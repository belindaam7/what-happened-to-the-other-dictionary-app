import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <br />
        <strong>Similar:</strong>

        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              {" "}
              {synonym.toUpperCase(0).charAt(0) + synonym.slice(1)},{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
