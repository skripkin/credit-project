import styled, { css } from "styled-components";

import { colors } from "../../constants";

export const Container = styled.div`
  width: 100%;
  padding: 50px 80px;
  background: url(./credit-bg.png) no-repeat;
  background-size: cover;
`;

export const CreditTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 76px;
`;

export const CreditTabsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CreditTabBox = styled.div`
  margin-right: 22px;
  padding-right: 22px;
  border-right: 1.04px solid ${colors.caribbeanGreen};
  cursor: pointer;

  :last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }
`;

export const CreditTabTitle = styled.p<{isactive: boolean}>`
  padding-bottom: 1px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 16.64px;
  line-height: 22px;
  color: ${colors.white};

  ${({isactive}) => isactive && css`
    border-bottom: 2px solid ${colors.caribbeanGreen};
  `}
`;

export const CreditTitle = styled.p`
  width: 60%;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 75px;
  line-height: 85px;
  color: ${colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
`;

export const RateBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 38px;
`;

export const RateDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${colors.caribbeanGreen};
  border-radius: 50%;
`;

export const RateTitle = styled.p`
  margin-left: 11px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 25px;
  color: ${colors.white};
`;

export const ButtonBox = styled.div`
  max-width: 162px;
  margin-top: 51px;
  margin-bottom: 135px;
`;

export const BenifitsContainer = styled.div`
  padding: 60px 80px;
`;

export const BenifitsTitle = styled.p`
  margin-bottom: 37px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  text-align: center;
  color: ${colors.black};
`;

export const BenifitsBoxes = styled.div`
  display: flex;
`;

export const BenifitsBox = styled.div`
  flex: 1;
  max-width: 413px;
  margin-right: 21px;
  padding: 42px;
  background: ${colors.aquaHaze};

  :last-child{
    margin-right: 0;
  }
`;

export const BenifitsBoxTitle = styled.p`
  margin-bottom: 18px;
  font-family: Red Ring bold;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;
  color: ${colors.black};
`;

export const BenifitsBoxDesc = styled.p`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.black};
`;

export const CalculatorContainer = styled.div`
  width: 100%;
  height: 568px;
  padding-top: 82px;
  position: relative;
  background: url(./calc-bg.png) no-repeat;
  background-size: cover;
`;

export const CalcTitle = styled.p`
  margin-bottom: 54px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  text-align: center;
  color: ${colors.white};
`;

export const StepBox = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const CalcBox = styled.div`
  width: 75%;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
`;

export const PartnersContainer = styled.div`
  padding: 0 80px;
  padding-top: 314px;
  padding-bottom: 72px;
  background-color: ${colors.aquaHaze};
`;

export const PartnersTitle = styled.p`
  margin-bottom: 39px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  text-align: center;
  color: ${colors.black};
`;

export const PartnersLink = styled.a`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  color: ${colors.caribbeanGreen};
  border-bottom: 2px dotted ${colors.caribbeanGreen};
`;

export const PartnerCardBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Partner = styled.div`
  margin-right: 16px;

  :last-child{
    margin-right: 0;
  }
`;