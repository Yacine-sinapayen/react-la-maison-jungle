import "../styles/Categories.css";

// Je récupère mes props depuis mon composant parent ShoppinList
function Categories({ setActiveCategory, categories, activeCategory }) {
  // Composant parent ShoppingList
  return (
    <div className="lmj-categories">
    <p>Choisissez une catégorie</p> 
      <select
        value={activeCategory}
        // onChange={(je récupère la caté sélectionnées) => et je met à jour mon state pour l'afficher}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        {/* J'affiche dans mes options les catégories qui ont été récupéré dans le composant parent ShoppingList */}
        <option value=''>---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Bouton de réinitialisation du select */}
      <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
