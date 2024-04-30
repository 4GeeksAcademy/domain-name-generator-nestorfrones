/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const dominio = document.getElementById("dominio");

  function domainNameGenerator() {
    let pronouns = ["the", "our"];
    let adjetives = ["great", "big"];
    let nouns = ["jogger", "racoon"];
    let exts = [".com", ".es"];

    let results = [];

    for (let pronoun of pronouns) {
      for (let adj of adjetives) {
        for (let noun of nouns) {
          for (let ext of exts) {
            let resultado = `<p>${pronoun}${adj}${noun}${ext}</p>`;
            results.push(resultado);
            dominio.innerHTML += resultado;
            console.log(resultado);
          }
        }
      }
    }
  }
  domainNameGenerator();
};
