import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart, activeCategory }) {
  // Composant parent App.js

  const [isOpen, setIsOpen] = useState(false);

  /*Le total de mon panier est récupéré avec l'accumulateur de reduce() 
  1 - "acc" = est une valeur accumulée qui est mise à jour à chaque élément du tableau
  2 - "plantType" la valeur en cours d'ittération
  4 - "acc + plantType.amout * plantType.price" les instructions à exéctutées sur chaque élem du tableau
  6 - "0" la valeur initiale de mon tableau*/
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  	/* UseEffect exo : Je veux déclancher une alerte à chaque ajout dans le panier.
	1 er param passé à useeffcet = fonction ici notre alert
	2 nd param est un "tableau de dépendances" qui va permettre de définir quand déclancher l'effet. Ici je veux que mon effet se déclanche quand le [total] de mon panier(cart) change.
	useEffect(() => {
		alert(`J'aurai ${total}€ à payer 💸`);
	}, [total, activeCategory]); 
  */

	/* useEffect se déclanche à chaque rendu de mon composant : */
	// useEffect(() => {
	// 	console.log('je me déclanche à chaque rendu de mon composant');
	// });

	/* useEffect se déclanche seulement lors du premier rendu de mon composant car il possède en 2ème param un tableau de dépendances vide: */
	// useEffect(() => {
	// 	console.log('je me déclanche seulement au premier rendu de mon composant car useEffect possède un tableau de dépendances vide');
	// });

	/* useEffect : se déclanche au premier rendu de mon composant ET à chaque modification du total de mon panier(cart) */
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	},[total]);

	/* useEffect se déclanche lorsque l'élément est retiré du DOM, par exemple lorsque je cache mon panier avec une ternaire/ Donc cette effet se déclanche lors d'un évent grâce à mon retrun */ 
	// useEffect(() => {
	// 	return () => console.log('je me déclanche lorsqu\'il y a une intérraction dans mon dom : au click');
	// })



  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
