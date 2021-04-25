import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors } from "../../constants";

export const Container = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 54px 80px;
  background-color: ${colors.black};

  @media(max-width: 950px){
    padding: 24px;
  }

  @media(max-width: 700px){
    align-items: center;
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  flex: 1;
  margin-right: 44px;
  
  @media(max-width: 1250px){
    margin-right: 24px;
  }

  @media(max-width: 700px){
    margin-right: 0;
  }
`;

export const LogoImage = styled.img`
  display: block;
  max-width: 218px;
  margin-bottom: 32px;

  @media(max-width: 700px){
    max-width: 183px;
    margin-bottom: 23px;
  }
`;

export const SocialBox = styled.div`
  @media(max-width: 700px){
    display: none
  }
`;

export const SocialBoxAdaptive = styled.div`
  display: none;

  @media(max-width: 700px){
    display: block;
  }
`;

export const FooterMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;

  @media(max-width: 1250px){
    margin-right: 24px;
  }

  @media(max-width: 1150px){
    display: none;
  }
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
  
  @media(max-width: 1250px){
    margin-right: 24px;
  }

  @media(max-width: 700px){
    margin-right: 0;
    margin-bottom: 23px;
    font-size: 11px;
    line-height: 15px;   
    text-align: center;
  }
`;

export const LoginButton = styled.div`
  max-width: 138px;
  width: 100%;
  margin-right: 44px;
  
  @media(max-width: 1250px){
    margin-right: 24px;
  }

  @media(max-width: 700px){
    display: none
  }
`;

export const LicenseBox = styled.div`
  flex: 1;

  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 23px;
  }
`;

export const LicenseDescription = styled.p`
  margin-bottom: 18px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.white};

  @media(max-width: 700px){
    margin-bottom: 23px;
    text-align: center;
  }
`;