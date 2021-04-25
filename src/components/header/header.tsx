import React from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  return(
    <Styled.HeaderContainer>
      <Styled.LogoLink to={logoLink}>
        <Styled.LogoImage src={logoImage} alt="logo error"/>
      </Styled.LogoLink>
      <Styled.MenuBox>
        <Menu menuItems={headerMenu}/>
      </Styled.MenuBox>
      <Styled.ButtonBox>
        <Button isLogin={true} onClick={onLoginClick}/>
      </Styled.ButtonBox>

      <Styled.BurgerMenuButton onClick={() => setBurgerOpen(!burgerOpen)}>
        <Styled.BurgerMenu src="./menu.png"/>
        {burgerOpen &&
          <Styled.BurgerMenuList>
            {headerMenu.map(item =>
              <Styled.MenuItems key={item.title}>
                <Styled.MenuLinks to={item.link} isActive={history.location.pathname === `/${item.link}` && true}>{item.title}</Styled.MenuLinks>
              </Styled.MenuItems>
            )}
            <Styled.ButtonBox>
              <Button isLogin={true} onClick={onLoginClick}/>
            </Styled.ButtonBox>
          </Styled.BurgerMenuList>
        }
      </Styled.BurgerMenuButton>
    </Styled.HeaderContainer>
  )
};

export default Header;