import React, { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {
  // Composant parent App.js
  /* Création d'un select pour filtrer par 'categories' */
  const [activeCategory, setActiveCategory] = useState("");

  /* Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.*/
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  /* Ma fonction "addToCart" : ajoute une plante à mon panier (cart)
    1 - Récupère en param le name et le price de la plante
    2 - Ensuite dans ma const "currentPlanAdded" je vérifie si ma plante ait déjà ajoutée au panier(cart) grâce à "cart.find". Cette méthode me renvoie la "valeur que je cherche" ou "undefined":
      2.a - en param de cart.find((élement rechercher) => condition de recherche)

    3 - (if) Si "currentPlanAdded" === "true"
      3.a - Je stock dans une const "cartFilteredCurrentPlant" mon tableau de cart filtrées afin de ne récupérer que les plantes différnetes de ma "currentPlanAdded" <=> cart.find((elems que je cherche) => condition de filtre)

      3.b - Ensuite je vais mettre à jour mon state grâce à "updateCart" qui est (dans notre cas d'utilisation) un tableau décomposer d'objet afin de pouvoir récupérer plusieurs propriétés (name, price, amout) par plantes (name, price, amout).
        3.b.1 - je fais un spreadOperator (copie) de mon tableau "...cartFilteredCurrentPlant" car je ne modifie jamais les éléments du state directement car le state est imuable.
        3.b.2 - Je met à jour la quantité de ma plante sélectionnée : "currentPlanAdded"

    4 - (else) Sinon si "currentPlanAdded" === "undefined <=> false" cad que la plante sélectionnée n'existe pas encore dans mon panier(cart) j'ai juste à l'ajouter. 
      4.1 - J'update mon state updateCart([...cart, {name, price, amout : 1}]) avec : 
        - 1 er argu une copie de mon tableau de "...cart" qui contient mes plantes déjà présentent dans le panier(cart) 
        - 2 eme argu l'ajout de ma nouvelle plante 
  */
  function addToCart(name, price) {
    // 2
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    console.log(currentPlantSaved);
    // 3
    if (currentPlantSaved) {
      // 3.a
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      // 3.b
      updateCart([
        // 3.b.1
        ...cartFilteredCurrentPlant,
        // 3.b.2
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
      // 4
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      {/* Filtre par catégories */}
      <Categories
        // cf "const categories" plus haut dans le code qui récupère les caté des plantes.
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>

          ) : null
          
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
