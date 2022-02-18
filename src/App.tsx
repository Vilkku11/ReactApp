import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Henkilo";
import { Henkilo } from "./Henkilo";
import { render } from "@testing-library/react";
import Test from "./Henkilo"



var h = new Henkilo("lol", "ka", 12);
let etu = h.getEtunimi;

function App(): JSX.Element {
  return <Test />;
}

export default App;
