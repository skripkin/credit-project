import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 50px 100px;
  background-color: ${colors.white};
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
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
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