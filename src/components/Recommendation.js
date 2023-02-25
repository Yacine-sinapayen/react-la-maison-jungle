import React from "react";

function Recommendation() {
  // je récupère le mois actuel en js, la fonction
  // getMonth renvoie un number
  const currentMonth = new Date().getMonth();
  // je vérifie si nous sommes au primtemps
  const isSpring = currentMonth >= 2 && currentMonth <= 5;

  if (!isSpring) {
    return <div>Ce n'est pas le moment de rempoter !</div>;
  }
  return <div>C'est le primtemps, rempotez !</div>;
}

// j'importe cette condition dans mon banner pour l'afficher
export default Recommendation;
