import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState(" ");

  // Je récupère la valeur de l'email rentrée dans l'input et je met à jour mon state. 
  function handleInput(e) {
    setInputValue(e.target.value);
    console.log(e);
  }

  // Fonction de gestion d'erreur 
  function handleBlur(){
    if(!inputValue.includes('@')){
      alert('Attention il manque le @ dans votre email')
    }
  }
  return (
    <footer className="lmj-footer">
    
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>

      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input 
        type="email" 
        placeholder="Entrez votre mail"
        value={inputValue} 
        onChange={handleInput}
        // fonction onBlur est un événement qui se déclenche lorsqu'un élément HTML perd le focus 
        onBlur={handleBlur}
      />

    </footer>
  );
}

export default Footer;
