import { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import "../styles/Layout.css";
// import QuestionFormControl from "./QuestionFormControl";
// import QuestionFormNoControl from "./QuestionFormNoControl";

function App() {
/* Mise en place du localStorage :
1 - j'initie une const "savedcart" qui récupère dans mon localStorage les produits déjà ajouter au panier.

2 - Le ternaire de mon state veut dit : il y a t'il déjà des item dans mon panier ? 
  2.a - Si oui récupère là et convertie là en un objet JS. (JSON.parse() est une méthode JavaScript qui convertit une chaîne de caractères JSON en un objet JavaScript.)

  2.b - Si non initie le state à un un tableau d'objet vide que l'on appelle aussi décomposition : çaa pemert d'ajouter des plantes avec pour chacunes les propriétés correspondante donc un objet avec le 'nom , price, quantity'.(A ne pas confondre avec la destructuration qui ne concerne que des objets et non des tableau.) 

  3 - Dans mon UseEffect je vais mettre à jour le localStorage de cart avec mes items à chaque modification le composant cart. 
  */
  // 1
  const savedCart = localStorage.getItem("cart");
  // 2
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  // 3
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Création d'un select pour filtrer par 'categories' cf composant ShoppingList.
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      <div>
        <Banner>
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
        </Banner>
        <div className="lmj-layout-inner">
          <Cart
            activeCategory={activeCategory}
            cart={cart}
            updateCart={updateCart}
          />
          <ShoppingList
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            cart={cart}
            updateCart={updateCart}
          />
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
