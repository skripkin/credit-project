import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../constants";

export const Container = styled.nav``;

export const MenuBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItemBox = styled.li`
  margin-right: 32px;

  :last-child {
    margin-right: 0;
  }
`;

export const MenuItem = styled(Link)<{isactive: boolean}>`
  padding-bottom: 2px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.black};

  ${({isactive}) => isactive && css`
    border-bottom: 3px solid ${colors.caribbeanGreen};
  `}
`;