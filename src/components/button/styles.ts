import styled, { css } from "styled-components";
import { colors } from "../../constants";

import Icon from "../icon";

export const ButtonContainer = styled.button<{islogin: boolean}>`
  width: 100%;
  padding: 18px;
  background: ${colors.caribbeanGreen};
  border-radius: 5px;

  ${({islogin}) => islogin && css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px;
  `}
`;

export const ButtonTitle = styled.p`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.white};
`;

export const ButtonIcon = styled(Icon)`
  margin-left: 9px;
  width: 16px;
  height: 16px;
`;