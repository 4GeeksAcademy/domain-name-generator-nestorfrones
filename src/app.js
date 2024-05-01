/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const dominio = document.getElementById("dominio");

  function domainNameGenerator() {
    let pronouns = ["the", "our"];
    let adjectives = ["great", "big"];
    let nouns = ["jogger", "racoon"];
    let exts = [".com", ".es"];

    // for (let pronoun of pronouns) {
    //   for (let adj of adjetives) {
    //     for (let noun of nouns) {
    //       for (let ext of exts) {
    //         let resultado = `<p>${pronoun}${adj}${noun}${ext}</p>`;
    //         dominio.innerHTML += resultado;
    //         console.log(resultado);
    //       }
    //     }
    //   }
    // }
    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          for (let l = 0; l < exts.length; l++) {
            let resultado = `${pronouns[i]}${adjectives[j]}${nouns[k]}${exts[l]}`;
            dominio.innerHTML += `<p>${resultado}</p>`;
            console.log(resultado);
          }
        }
      }
    }
  }
  domainNameGenerator();
};
