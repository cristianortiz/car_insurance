import React from "react";
import styled from "@emotion/styled";

//replace the <header> tag whit this css styled component and then is used  like JSX react component way
const HeaderContainer = styled.header`
  background-color: #26c6da;
  padding: 10px;
  color: #ffffff;
`;

const HeaderText = styled.h1`
  font-size: 2em;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
