import React from "react";
import { iconName } from "../icon/icon";

import * as Styled from "./styles";

interface IProp {
  type: iconName;
  linkToNetwork: string; 
}

interface INetwork {
  netItems: IProp[];
}

const Networks = ({ netItems }: INetwork) => {
  return(
    <Styled.Container>
      {netItems.map(item =>
        <Styled.SocialButton href={item.linkToNetwork}>
          <Styled.SocialIcon iconName={item.type}/>
        </Styled.SocialButton>
      )}
    </Styled.Container>
  )
}

export default Networks;