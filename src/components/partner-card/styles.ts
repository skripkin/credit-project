import styled from "styled-components";
import { colors } from "../../constants";
import Icon from "../icon";

export const PartnerLogo = styled(Icon)`
  width: 75%;
  stroke: ${colors.aquaHaze};
  fill: ${colors.aquaHaze};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background-color: ${colors.white};
  cursor: pointer;

  :hover {
    background-color: ${colors.caribbeanGreen};

    ${PartnerLogo}{
      stroke: ${colors.white};
      fill: ${colors.white};
    }
  }
`;