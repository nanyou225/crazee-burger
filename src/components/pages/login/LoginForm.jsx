import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../theme"

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: ${theme.fonts.P5};
  }
  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

  button {
    width: 100%;
  }
`;



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
    <LoginFormStyled>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={newName}
          onChange={handleChange}
          type={"text"}
          placeholder={"Entrez votre prénom..."}
        />
        <button>Accéder à mon espece</button>
      </form>
    </LoginFormStyled>
  );
}
