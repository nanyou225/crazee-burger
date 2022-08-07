import styled from "styled-components";
import { theme } from "../../../theme";
import { IoPersonCircle } from "react-icons/io5";
import LoginTitle from "../../ui-reusable/LoginTitle";
import PrimaryButton from "../../ui-reusable/PrimaryButton";
import TextInput from "../../ui-reusable/TextInput";

export default function LoginForm() {
  return (
    <LoginFormStyled action="submit">
      <LoginTitle />
      <IoPersonCircle />
      <TextInput />
      <PrimaryButton />
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
