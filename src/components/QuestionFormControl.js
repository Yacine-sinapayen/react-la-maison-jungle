import { useState } from "react";

function QuestionFormControl() {
  // Avantages formulaire contrôlé : cela permet d'interagir directement avec la donnée renseignée par l'utilisateur. Vous pouvez donc afficher un message d'erreur si la donnée n'est pas valide, ou bien la filtrer en interceptant une mauvaise valeur. ex avec isInputError
  const [inputValue, setInputValue] = useState("Posez une question ici");
  // S'il y a la lettre f dans mon input alors je renvoie une erreur.
  const isInputError = inputValue.includes("f");

  // Je créais une fonction qui vérifie si oui ou non la valeur de mon input ne contient pas la lettre 'f'. Si ma condition est 'true' je setInputValue(value) sinon 'false' j'affiche mon erreur.
  function checkValue(value) {
    if (!value.includes("f")) {
      setInputValue(value);
    }
  }

  return (
    <div>
      {isInputError && (
        <div> Vous n'avez pas le droit d'utiliser la lettre "f" ici</div>
      )}
      <textarea
        value={inputValue}
        onChange={(e) => checkValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi</button>
    </div>
  );
}

export default QuestionFormControl;
