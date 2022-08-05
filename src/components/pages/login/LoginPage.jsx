import styled from "styled-components";
import LogoStyled from "../../ui-reusable/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <h1>CRAZEE</h1>
      <LogoStyled />
      <h1>BURGER</h1>
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
    padding-inline: 65px;
  }

  img {
    /* padding-inline: 120px; */
  }
`;
