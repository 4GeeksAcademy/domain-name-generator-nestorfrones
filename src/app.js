/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function domainNameGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger.com", "racoon.com"];

    let aux = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          aux.push([pronoun[i], adj[j], noun[k]]);
        }
      }
    }
    document.querySelector("#domain1").innerHTML =
      aux[0][0] + aux[0][1] + aux[0][2];
    document.querySelector("#domain2").innerHTML =
      aux[1][0] + aux[1][1] + aux[1][2];
    document.querySelector("#domain3").innerHTML =
      aux[2][0] + aux[2][1] + aux[2][2];
    document.querySelector("#domain4").innerHTML =
      aux[3][0] + aux[3][1] + aux[3][2];
    document.querySelector("#domain5").innerHTML =
      aux[4][0] + aux[4][1] + aux[4][2];
    document.querySelector("#domain6").innerHTML =
      aux[5][0] + aux[5][1] + aux[5][2];
    document.querySelector("#domain7").innerHTML =
      aux[6][0] + aux[3][1] + aux[6][2];
    document.querySelector("#domain8").innerHTML =
      aux[7][0] + aux[7][1] + aux[7][2];

    console.log(aux.length + " combinaciones posibles");
    console.log("1." + aux[0][0] + aux[0][1] + aux[0][2]);
    console.log("2." + aux[1][0] + aux[1][1] + aux[1][2]);
    console.log("3." + aux[2][0] + aux[2][1] + aux[2][2]);
    console.log("4." + aux[3][0] + aux[3][1] + aux[3][2]);
    console.log("5." + aux[4][0] + aux[4][1] + aux[4][2]);
    console.log("6." + aux[5][0] + aux[5][1] + aux[5][2]);
    console.log("7." + aux[6][0] + aux[6][1] + aux[6][2]);
    console.log("8." + aux[7][0] + aux[7][1] + aux[7][2]);
  }
  domainNameGenerator();
};
