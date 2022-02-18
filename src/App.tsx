import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Henkilo";
import { Henkilo } from "./Henkilo";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;

var h = new Henkilo("lkakka", "lol", 12);

console.log(h.getEtunimi());
h.setEtunimi("vamma");
console.log(h.getEtunimi());
