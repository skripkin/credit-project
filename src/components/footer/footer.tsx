import React from "react";

import * as Styled from "./styles";

import { Networks, Button, BankLicense } from "../../components";
import { IProp as NetProp } from "../networks/networks";
import { IProp as IMenu } from "../menu/menu";
import { iconName } from "../icon/icon";

interface IFooter {
  logo: string;
  address: string;
  licenceDesc: string;
  networks: NetProp[];
  footerLeftMenu: IMenu[];
  footerRightMenu: IMenu[];
  licenseInfo: {
    icon: iconName,
    bankTitle: string,
    licenseImg: string
  };
  onLoginClick: () => void;
}

const Footer = ({ logo, address, licenceDesc, networks, footerLeftMenu, footerRightMenu, licenseInfo, onLoginClick }: IFooter) => {
  return(
    <Styled.Container>
      <Styled.LogoBox>
        <Styled.LogoImage src={logo} alt="logo error"/>
        <Styled.SocialBox>
          <Networks netItems={networks}/>
        </Styled.SocialBox>
      </Styled.LogoBox>
      <Styled.FooterMenu>
        <Styled.MenuBox>
          {footerLeftMenu.map(item => 
            <Styled.MenuItems>
              <Styled.MenuLink to={item.link}>{item.title}</Styled.MenuLink>
            </Styled.MenuItems>
          )}
        </Styled.MenuBox>
        <Styled.MenuBox>
          {footerRightMenu.map(item => 
            <Styled.MenuItems>
              <Styled.MenuLink to={item.link}>{item.title}</Styled.MenuLink>
            </Styled.MenuItems>
          )}
        </Styled.MenuBox>
      </Styled.FooterMenu>
      <Styled.Address>{address}</Styled.Address>
      <Styled.LoginButton>
        <Button isLogin={true} onClick={onLoginClick}/>
      </Styled.LoginButton>
      <Styled.LicenseBox>
        <Styled.LicenseDescription>{licenceDesc}</Styled.LicenseDescription>
        <BankLicense bankIcon={licenseInfo.icon} title={licenseInfo.bankTitle} license={licenseInfo.licenseImg}/>
      </Styled.LicenseBox>
    </Styled.Container>
  )
};

export default Footer;