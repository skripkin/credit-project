import React from "react";

import * as Styled from "./styles";

interface IProp {
  icon: any;
}

const PartnerCard = ({ icon }: IProp) => {
  return(
    <Styled.Container>
      <Styled.PartnerLogo iconName={icon}/>
    </Styled.Container>
  )
};

export default PartnerCard;