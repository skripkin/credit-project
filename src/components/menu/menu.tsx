import React from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styles";

export interface IProp {
  title: string;
  link: string;
}

interface IMenu {
  menuItems: IProp[]
}

const Menu = ({menuItems}: IMenu) => {
  const history = useHistory();
  return(
    <Styled.Container>
      <Styled.MenuBox>
        {menuItems.map((item: any )=>
          <Styled.MenuItemBox key={item.title}>
            <Styled.MenuItem to={item.link} isactive={history.location.pathname === `/${item.link}` && true}>{item.title}</Styled.MenuItem>
          </Styled.MenuItemBox>
        )}
      </Styled.MenuBox>
    </Styled.Container>
  )
};

export default Menu;