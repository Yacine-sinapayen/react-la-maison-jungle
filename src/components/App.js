import { useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png';
import '../styles/Layout.css';
// import QuestionFormControl from "./QuestionFormControl";
// import QuestionFormNoControl from "./QuestionFormNoControl";

function App() {
  /* Pour que le state de cart soit dispo dans tous mes composants, je le fais remonter dans le composant parents le plus proche commun à tous : App.js. je passe ensuite cart et updateCart en props à mes composants.
  
  Ici, mon State est un tableau d'objet on appel ça la "décomposition".
  (A ne pas confondre avec la destructuration qui ne concerne que des objet et non des tableau.) Pourquoi ? Ça pemert d'ajouter des plantes avec pour chacunes les propriétés correspondante donc un objet avec le 'nom , price, quantity' */
  const [cart, updateCart]=useState([]);



  return (
    <>
      <div>
        <Banner>
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
        </Banner>
        <div className="lmj-layout-inner">
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <Footer />
      </div>

      {/* Exemple de formulaire NON CONTROLÉ 
      <QuestionFormNoControl /> */}
      {/* Exemple de formulaire CONTROLÉ
      <QuestionFormControl /> */}
    </>
  );
}

export default App;
