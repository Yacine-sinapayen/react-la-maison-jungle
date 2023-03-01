import React from "react";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ id, name, cover, light, water }) {
  function handleClick(e) {
    console.log('voici mon event ', e);
  }

  return (
    <li key={id} className="lmj-plant-item" onClick={(e) => handleClick(e)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
      {/* Je récupère les valeurs 'water' et 'light depuis mon composant parents ShoppingList grace à mes props */}
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
