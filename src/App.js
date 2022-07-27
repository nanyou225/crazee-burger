import { useState } from "react";

function App() {
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(event);
    alert(newName);
    setNewName("");
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRAZEE BURGER</h1>
        <hr />
        <h2>bienvenu chez nous</h2>
        <h3>Connectez-vous</h3>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            value={newName}
            onChange={handleChange}
            type={"text"}
            placeholder={"Entrez votre prénom..."}
          />
          <button>Accéder à mon espece</button>
        </form>
      </header>
    </div>
  );
}

export default App;

// *Gestion de formulaire*

// 1-Création du formulaire
// 2-Soumission du formailre (onSubmit / handleSubmit)
// 3-collect des données
// (sync descendante/ascendeante (onChange / handleChange))
