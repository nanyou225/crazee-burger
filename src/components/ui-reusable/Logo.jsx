import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

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

export default function Logo() {
  return (
    <LogoStyled>
      <h1 className="logo">CRAZEE</h1>
      <img className="logo" src="/images/logo.png" alt="logo" />
      <h1 className="logo">BURGER</h1>
    </LogoStyled>
  );
}
