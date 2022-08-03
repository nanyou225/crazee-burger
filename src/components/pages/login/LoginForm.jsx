import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    font-size: ${(props) => theme.fonts.P5};
  }
  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: ${(props) => theme.colors.white};
    font-size: ${(props) => theme.fonts.P4};
  }

  button {
    width: 100%;
  }
`;

const fonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  P0: "15px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};

const colors = {
  black: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_black: "#292729",
  primary: "#ffa01b",
  primary_burger: "#ff9f1b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {};
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  spacing,
};

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
