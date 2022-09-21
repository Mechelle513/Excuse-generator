/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-Excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let subject = ["dog", "cat", "aunt"];
  let pronoun = ["my", "the neighbor's"];
  let action = ["pooped", "is"];
  let possesion = ["in my bed", "on my car", "dead"];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let actionIndex = Math.floor(Math.random() * action.length);

  let possesionIndex = Math.floor(Math.random() * possesion.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possesionIndex]
  );
};
