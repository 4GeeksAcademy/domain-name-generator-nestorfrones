/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function domainNameGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let ext = [".com", ".es"];

    let aux = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < ext.length; l++) {
            aux.push([pronoun[i], adj[j], noun[k], ext[l]]);
          }
        }
      }
    }

    for (let m = 0; m < aux.length; m++) {
      document.getElementById("domain" + m).innerHTML +=
        aux[m][0] + aux[m][1] + aux[m][2] + aux[m][3];
      console.log(aux[m][0] + aux[m][1] + aux[m][2] + aux[m][3]);
    }
  }
  domainNameGenerator();
};
