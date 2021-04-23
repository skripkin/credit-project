import React from "react";

import * as Styled from "./styles";
import { iconName } from "../icon/icon";

interface IProp {
  bankIcon: iconName;
  title: string;
  license: string;
  isLarge?: boolean;
}

const BankLicense = ({ bankIcon, title, license, isLarge = false }: IProp) => {
  return(
    <Styled.Container islarge={isLarge}>
      <Styled.CountryIcon iconName={bankIcon}/>
      <Styled.BankName>{title}</Styled.BankName>
      <Styled.LicenseImage src={license} alt="license error"/>
    </Styled.Container>
  )
};

export default BankLicense;