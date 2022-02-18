import React from "react";
import ReactDOM from "react-dom";

export class Henkilo {
  private etunimi: string;
  private sukunimi: string;
  private ika: number;

  constructor(aEtunimi: string, aSukunimi: string, aIka: number) {
    this.etunimi = aEtunimi;
    this.sukunimi = aSukunimi;
    this.ika = aIka;
  }

  //Set functions
  setEtunimi(aEtunimi: string) {
    console.log("Set etunimi");
    this.etunimi = aEtunimi;
  }
  setSukunimi(aSukunimi: string) {
    console.log("Set sukunimi");
    this.sukunimi = aSukunimi;
  }
  setIka(aIka: number) {
    console.log("Set ika");
    this.ika = aIka;
  }

  // Get functions
  getEtunimi() {
    console.log("Return etunimi");
    return this.etunimi;
  }
  getSukunimi() {
    console.log("Return sukunimi");
    return this.sukunimi;
  }
  getIka() {
    console.log("Return ika");
    return this.ika;
  }
}
