import styled, { css } from "styled-components";
import { colors} from "../../constants";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 80px;
  width: 100%;

  @media(max-width: 950px){
    padding: 24px;
  }
`;

export const LogoLink = styled(Link)``;
export const MenuBox = styled.div`
  margin-right: 140px;
  margin-left: auto;
  width: 35%;

  @media(max-width: 1192px){
    width: 45%;
    margin-right: 24px;
  }

  @media(max-width: 845px){
    width: 55%;
  }

  @media(max-width: 732px){
    margin-left: 24px;
  }

  @media(max-width: 720px){
    display: none;
  }
`;

export const LogoImage = styled.img`
  display: block;
  max-width: 305px;

  @media(max-width: 845px){
    max-width: 183px;
  }
`;

export const ButtonBox = styled.div`
  max-width: 138px;

  @media(max-width: 720px){
    display: none;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;
  position: relative;

  @media(max-width: 720px){
    display: block;
  }
`;

export const BurgerMenu = styled.img`
  display: block;
  width: 32px;
  height: 32px;
`;

export const BurgerMenuList = styled.ul`
  position: absolute;
  right: 0;
  top: calc(100% + 5px);
  padding: 12px;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};
  border-radius: 5px;
`;

export const MenuItems = styled.li`
  margin: 12px 0;
`;

export const MenuLinks = styled(Link)<{isActive: boolean}>`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.black};
  padding-bottom: 1px;

  ${({isActive}) => isActive && css`
    border-bottom: 2px solid ${colors.caribbeanGreen};
  `}
`;