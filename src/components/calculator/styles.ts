import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  margin: 0 auto;
  padding: 50px 100px;
  background-color: ${colors.white};

  @media(max-width: 950px){
    padding: 24px;
  }
`;

export const Title = styled.p`
  margin-bottom: 27px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  text-align: center;
  color: ${colors.black};

  @media(max-width: 675px){
    margin-bottom: 24px;
    font-size: 25px;
    line-height: 31px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 675px){
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  width: 75%;
`;

export const InputBox = styled.div`
  margin-bottom: 27px;

  :last-child{
    margin-bottom: 0;
  }
`;

export const SumBox = styled.div`
  max-width: 162px;
  margin-left: auto;

  @media(max-width: 1060px){
    margin-left: 24px;
  }

  @media(max-width: 675px){
    margin: 0 75px;
    margin-top: 35px;
    max-width: unset;
    width: 75%;
  }
`;

export const SumTitle = styled.p`
  margin-bottom: 11px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: ${colors.black};
`;

export const SumNumber = styled.p`
  padding-bottom: 33px;
  margin-bottom: 38px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  color: ${colors.black};
  border-bottom: 3px solid ${colors.black};
`;