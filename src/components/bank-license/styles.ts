import styled, { css } from "styled-components";

import Icon from "../icon";
import { colors } from "../../constants";

export const CountryIcon = styled(Icon)`
  width: 23px;
  height: 23px;
`;

export const BankName = styled.p`
  margin-left: 6px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${colors.white};
`;

export const LicenseImage = styled.img`
  margin-left: 15px;
  display: block;
  max-width: 32px;
`;

export const Container = styled.div<{islarge: boolean}>`
  display: flex;
  align-items: center;

  ${({islarge}) => islarge && css`

    ${CountryIcon}{
      width: 32px;
      height: 32px;
    }

    ${BankName}{
      margin-left: 8px;
      font-size: 18px;
    }

    ${LicenseImage}{
      margin-left: 21px;
      max-width: 45px;
    }
  `}
`;