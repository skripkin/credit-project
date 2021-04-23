import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors } from "../../constants";

export const Container = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 54px 80px;
  background-color: ${colors.black};
`;

export const LogoBox = styled.div`
  flex: 1;
  margin-right: 44px;
`;

export const LogoImage = styled.img`
  display: block;
  max-width: 218px;
  margin-bottom: 32px;
`;

export const SocialBox = styled.div``;

export const FooterMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
`;

export const MenuBox = styled.ul``;

export const MenuItems = styled.li`
  margin-bottom: 8px;

  :last-child{
    margin-bottom: 0;
  }
`;

export const MenuLink = styled(Link)`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.white};
`;

export const Address = styled.p`
  flex: 1;
  margin-right: 44px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.white};
`;

export const LoginButton = styled.div`
  max-width: 138px;
  width: 100%;
  margin-right: 44px;
`;

export const LicenseBox = styled.div`
  flex: 1;
`;

export const LicenseDescription = styled.p`
  margin-bottom: 18px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.white};
`;