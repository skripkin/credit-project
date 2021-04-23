import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 80px;
`;

export const LogoLink = styled(Link)``;

export const LogoImage = styled.img`
  display: block;
  max-width: 305px;
`;

export const ButtonBox = styled.div`
  max-width: 138px;
`;