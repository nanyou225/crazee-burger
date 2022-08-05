import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoIosArrowForward, IoMdContact } from "react-icons/io";

export default function LoginForm() {
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

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <div>
        <TextInputStyled>
          <IoMdContact />
          <input
            value={newName}
            onChange={handleChange}
            type={"text"}
            placeholder={"Entrez votre prénom"}
          />
        </TextInputStyled>
      </div>
      <PrimaryButtonStyled>
        Accéder à mon espece <IoIosArrowForward />
      </PrimaryButtonStyled>
    </LoginFormStyled>
  );
}

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

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; // should be there or in parent style?
  /* height: 17px; // add this if you want pixel perfect with Button Height */
  white-space: nowrap;
  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.gridUnit * 1.6}px;
    color: ${theme.colors.greySemiDark};
    /* min-width: 1em; // that way, the icon size is NOT affected by width of the entire component.
    border: 1px solid red; */
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.black};
    width: 100%;
    display: flex;

    &::placeholder {
      background: ${theme.colors.white};
      color: lightgrey;
    }

    &:focus {
      outline: 0;
    }
  }
`;

const PrimaryButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P0};
    margin-left: 10px;
  }
`;
