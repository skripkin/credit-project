import React from "react";

import { Header, Footer} from "..";
import { IProp as IMenu } from "../menu/menu";
import { IProp as INetwork } from "../networks/networks";
import { iconName } from "../icon/icon";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  header: {
    headerMenu: IMenu[],
    logoImage: string,
    logoLink: string,
  };
  footer: {
    logo: string;
    address: string;
    licenceDesc: string;
    networks: INetwork[];
    footerLeftMenu: IMenu[];
    footerRightMenu: IMenu[];
    licenseInfo: {
      icon: iconName,
      bankTitle: string,
      licenseImg: string
    };
  };
  onLoginClick: () => void;
}

const AppLayout = ({ children, header, footer, onLoginClick}: IProps) => (
  <div>
    <Header {...header} onLoginClick={onLoginClick}/>
    <LayoutContent>{children}</LayoutContent>
    <Footer {...footer} onLoginClick={onLoginClick}/>
  </div>
);

export default AppLayout;