import Banner from "./Banner";
import Footer from "./Footer";
// import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
// import QuestionFormControl from "./QuestionFormControl";
// import QuestionFormNoControl from "./QuestionFormNoControl";

function App() {
  return (
    <>
      <Banner />
      <ShoppingList />
      <Footer />

      {/* Exemple de formulaire NON CONTROLÉ 
      <QuestionFormNoControl /> */}
      {/* <Cart /> */}

      {/* Exemple de formulaire CONTROLÉ
      <QuestionFormControl /> */}

    </>
  );
}

export default App;
