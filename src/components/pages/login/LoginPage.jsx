import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function LoginPage() {
  //state
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(event);
    setNewName("");
    navigate({
      pathname: "/OrderPage",
      search: createSearchParams({
        newName: newName,
      }).toString(),
    });
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  //comportement

  //Affichage(render)
  return (
    <div>
      <h1>CRAZEE BURGER</h1>
      <hr />
      <h2>Bienvenu chez nous</h2>
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
    </div>
  );
}
