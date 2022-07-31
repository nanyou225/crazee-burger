import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function LoginForm() {
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

  //render

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={newName}
        onChange={handleChange}
        type={"text"}
        placeholder={"Entrez votre prénom..."}
      />
      <button>Accéder à mon espece</button>
    </form>
  );
}
