import styled from "styled-components";
import {theme} from "../../../theme"
import LoginForm from "./LoginForm"


export default function LoginPage() {
  return (
    <LoginPageStyled>
      <h1>CRAZEE</h1>
      {/*<LogoStyled>
        <img className="logo" src={"/src/images/logo.png"} alt="logo" />
      </LogoStyled>*/}
      <h1>BURGER</h1>
      <h2>Bienvenue chez nous !</h2>
      <hr />
      <h3>Connectez-vous</h3>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: pink;
    background: url(/images/fondEcranBurger.jpg) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo {
    transform: scale(2.5);
    img {
    }
  }
`;

const LogoStyled = styled.div`
  /* border: 1px solid red; */
  max-height: 100%;
  min-width: 200px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    /* border: 1px solid green; */
    object-fit: contain;
    object-position: center;
    height: ${theme.fonts.P6};
    width: 80px; // for Safari and Firefox
    margin: 0 5px;
  }
  h1 {
    /* border: 1px solid pink; */
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
`;


