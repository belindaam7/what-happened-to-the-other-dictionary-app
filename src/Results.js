import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
            <section>
        <h1>
          {props.results.word.toUpperCase(0).charAt(0) +
            props.results.word.slice(1)}
        </h1>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>

              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
              
              <div key={index}>
               
              <Meaning meaning={meaning} />
           
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
