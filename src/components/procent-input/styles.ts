import styled, { css, keyframes } from "styled-components";
import { colors } from "../../constants";

const ripple = keyframes`
  0% {
    box-shadow: 0 0 0 12px rgba(14, 209, 147, 0.25);
  }
  
  50% {
    box-shadow: 0 0 0 0px rgba(14, 209, 147, 0.4);
  }

  100% {
    box-shadow: 0 0 0 12px rgba(14, 209, 147, 0.25);
  }
`;

const slider = (w: number) => keyframes`
  0% {
    width: 0;
  }

  100% {
    width: ${w}%;
  }
`;

export const Container = styled.label``;

export const Title = styled.p`
  margin-bottom: 12px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.black};
`;

export const InputBox = styled.div`
  position: relative;
  padding: 14px 24px;
  border: 1px solid ${colors.mystic};
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Input = styled.input`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;
  color: ${colors.black};
  border: none;
  outline: none;
`;

export const DescFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const BottomTitle = styled.p`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.black};
`;

export const ProgressBox = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -10px;
  display: flex;
  align-items: center;
`;

export const ProgresLine = styled.div<{progress: number}>`
  height: 3px;
  background-color: ${colors.caribbeanGreen};

  ${({progress}) => progress && css`
    width: ${progress}%;
    animation: ${slider(+progress)} 0.5s linear;
  `}
`;

export const ProgresDot = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.caribbeanGreen};
  border-radius: 50%;

  ${css`
    animation: ${ripple} 1s ease-in infinite;
  `}
`;

export const WhiteDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${colors.white};
  border-radius: 50%;
`;