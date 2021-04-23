import React from "react";

import * as Styled from "./styles";

interface IButton {
  title?: string;
  isLogin?: boolean;
  onClick: () => void;
}

const Button = ({title, isLogin = false, onClick}: IButton) => {
  return(
    <Styled.ButtonContainer islogin={isLogin} onClick={onClick}>
      <Styled.ButtonTitle>{isLogin ? "Войти" : title}</Styled.ButtonTitle>
      {isLogin &&
        <Styled.ButtonIcon iconName="join"/>
      }
    </Styled.ButtonContainer>
  )
}

export default Button;