import styled from "styled-components";

import Icon from "../icon";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialButton = styled.a`
  margin-right: 13px;

  :last-child {
    margin-right: 0;
  }
`;

export const SocialIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;