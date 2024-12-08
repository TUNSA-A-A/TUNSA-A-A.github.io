import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <a href="#">
        <LogoImage>
          <img src="\images\TunsaLogoCircle.png" />
          <h2>TUNSA A&A </h2>
        </LogoImage>
      </a>
      <Menu>
        <a href="#"> Team </a>
        <a href="#"> Articles</a>
        <a href="#"> Glossary</a>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 20px;
  right: 0;
  
`;
const LogoImage = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    height: 40px;
    width: 40px;
    display: block;
    margin-right: 10px;
  }
  h2{
    font-family: 'Fira Code';
    /* color: #e64a59;  */
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1;
  a {
    padding: 20px;
    font-weight:600;
    position: relative;
  }
  a::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 12px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.5s ease-out;
  }
  a:hover::after {
    width: 100%;
  }
`;
