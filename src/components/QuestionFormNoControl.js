import React from "react";

function QuestionFormNoControl() {
function handleSubmit(e){
    // j'appelle  preventDefault, sinon le  submit   rafraîchirait la page.
    e.preventDefault()
    alert(e.target['my_input'].value)
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="my_input" defaultValue="Tapez votre texte" />
        <button type="submit">Entrer</button>
      </form>
    </>
  );
}

export default QuestionFormNoControl;
