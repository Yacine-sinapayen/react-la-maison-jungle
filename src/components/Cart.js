import { useState } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
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

  return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
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
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart;
