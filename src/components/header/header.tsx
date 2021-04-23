import React from "react";

import * as Styled from "./styles";

import { Menu, Button } from "../../components";
import { IProp } from "../menu/menu";

interface IHeader {
  headerMenu: IProp[];
  logoImage: string;
  logoLink: string;
  onLoginClick: () => void;
}

const Header = ({ headerMenu, logoImage, logoLink, onLoginClick }: IHeader) => {
  return(
    <Styled.HeaderContainer>
      <Styled.LogoLink to={logoLink}>
        <Styled.LogoImage src={logoImage} alt="logo error"/>
      </Styled.LogoLink>
      <Menu menuItems={headerMenu}/>
      <Styled.ButtonBox>
        <Button isLogin={true} onClick={onLoginClick}/>
      </Styled.ButtonBox>
    </Styled.HeaderContainer>
  )
};

export default Header;