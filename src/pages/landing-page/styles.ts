import styled, { css } from "styled-components";

import { colors } from "../../constants";

export const Container = styled.div`
  width: 100%;
  padding: 50px 80px;
  background: url(./credit-bg.png) no-repeat;
  background-size: contain;

  @media(max-width: 950px){
    padding: 24px;
  }

  @media(max-width: 785px){
    height: 486px;
    background-size: cover;
  }
`;

export const CreditTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 76px;

  @media(max-width: 1060px){
    margin-bottom: 38px;
  }

  @media(max-width: 530px){
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const BankBox = styled.div`
  @media(max-width: 530px){
    margin-bottom: 14px;
    align-self: flex-end;
  }
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

  @media(max-width: 1320px){
    font-size: 65px;
  }

  @media(max-width: 1220px){
    font-size: 55px;
    line-height: 65px;
  }

  @media(max-width: 1060px){
    font-size: 45px;
    line-height: 45px;
  }

  @media(max-width: 720px){
    font-size: 35px;
    line-height: 35px;
  }

  @media(max-width: 620px){
    width: 75%;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;

  @media(max-width: 830px){
    margin-top: 28px;
  }
  
  @media(max-width: 620px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RateBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 38px;

  @media(max-width: 620px){
    margin-right: 0;
    margin-top: 10px;
  }
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

  @media(max-width: 1060px){
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBox = styled.div`
  max-width: 162px;
  margin-top: 51px;
  margin-bottom: 135px;

  @media(max-width: 1220px){
    margin-bottom: 90px;
  }

  @media(max-width: 950px){
    margin-bottom: 75px;
  }

  @media(max-width: 720px){
    margin-bottom: 0;
  }

  @media(max-width: 442px){
    margin-top: 28px;
  }
`;

export const BenifitsContainer = styled.div`
  padding: 60px 80px;

  @media(max-width: 950px){
    padding: 24px;
  }
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

  @media(max-width: 720px){
    margin-bottom: 21px;
    font-size: 25px;
    line-height: 31px;
  }
`;

export const BenifitsBoxes = styled.div`
  display: flex;

  @media(max-width: 720px){
    flex-direction: column;
    align-items: center;
  }
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

  @media(max-width: 720px){
    max-width: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 11px;

    last-child{
      margin-bottom: 0;
    }
  }

  @media(max-width: 500px){
    padding: 32px;
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

  @media(max-width: 500px){
    margin-bottom: 11px;
    font-size: 21px;
    line-height: 25px;
  }
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

  @media(max-width: 950px){
    height: 425px;
    padding-top: 37px;
  }
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

  @media(max-width: 750px){
    margin-bottom: 20px;
  }
`;

export const StepBox = styled.div`
  width: 50%;
  margin: 0 auto;

  @media(max-width: 950px){
    width: 75%;
  }

  @media(max-width: 750px){
    margin: 0 24px;
    width: 100%;
  }
`;

export const CalcBox = styled.div`
  width: 75%;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);

  @media(max-width: 600px){
    top: 90%;
  }
`;

export const PartnersContainer = styled.div`
  padding: 0 80px;
  padding-top: 314px;
  padding-bottom: 72px;
  background-color: ${colors.aquaHaze};

  @media(max-width: 950px){
    padding: 24px;
    padding-top: 314px;
  }

  @media(max-width: 675px){
    padding-top: 480px;
  }

  @media(max-width: 600px){
    padding-top: 555px;
  }

  @media(max-width: 406px){
    padding-top: 592px;
  }

  @media(max-width: 345px){
    padding: 0 20px;
    padding-top: 628px;
  }
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

  @media(max-width: 600px){
    font-size: 25px;
    line-height: 31px;
    margin-bottom: 18px;
    white-space: nowrap;
  }

  @media(max-width: 336px){
    white-space: unset;
  }
`;

export const PartnersLink = styled.a`
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  color: ${colors.caribbeanGreen};
  border-bottom: 2px dotted ${colors.caribbeanGreen};

  @media(max-width: 600px){
    font-size: 25px;
    line-height: 31px;
    margin-bottom: 18px;
  }
`;

export const PartnerCardBox = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 950px){
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media(max-width: 789px){
    width: 90%;
  }

  @media(max-width: 675px){
    width: 100%;
  }

  @media(max-width: 600px){
    width: 90%;
  }

  @media(max-width: 455px){
    width: 100%;
  }

  @media(max-width: 336px){
    flex-direction: row;
  }
`;

export const Partner = styled.div`
  margin-right: 16px;

  :last-child{
    margin-right: 0;
  }

  @media(max-width: 950px){
    max-width: 169px;
    margin-bottom: 16px;

    :nth-child(4n){
      margin-right: 0;
    }
  }

  @media(max-width: 789px){
    :nth-child(4n){
      margin-right: 16px;
    }

    :nth-child(3n){
      margin-right: 0;
    }
  }

  @media(max-width: 600px){
    margin-right: 13px;

    :nth-child(4n){
      margin-right: 13px;
    }

    :nth-child(3n){
      margin-right: 13px;
    }

    :nth-child(2n){
      margin-right: 0;
    }
  }

  @media(max-width: 416px){
    max-width: 133px;
  }

  @media(max-width: 336px){
    max-width: unset;
    width: 100%;
    margin-right: 0;

    :nth-child(4n){
      margin-right: 0;
    }

    :nth-child(3n){
      margin-right: 0;
    }

    :nth-child(2n){
      margin-right: 0;
    }
  }
`;

export const AboutBox = styled.div`
  display: flex;

  @media(max-width: 650px){
    flex-direction: column-reverse;
  }
`;

export const LeftBox = styled.div`
  flex: 1;
`;

export const FrameLock = styled.div`
  width: 100%;
  height: 420px;
  background: url(./skeleton.png) no-repeat;
  cursor: pointer;

  @media(max-width: 360px){
    height: 185px;
    background-size: cover;
  }
`;

export const YoutubeFrame = styled.iframe`
  border: none;
  display: block;
`;

export const RightBox = styled.div`
  flex: 1;
  background-color: ${colors.caribbeanGreen};
  padding-top: 90px;
  padding-left: 120px;

  @media(max-width: 1250px){
    padding-top: 70px;
    padding-left: 100px;
  }

  @media(max-width: 795px){
    padding: 0 24px;
    padding-top: 50px;
  }

  @media(max-width: 650px){
    padding: 35px 20px;
  }
`;

export const RightTitle = styled.p`
  width: 50%;
  margin-bottom: 15px;
  font-family: Red Ring;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 47px;
  color: ${colors.white};

  @media(max-width: 1250px){
    width: 75%;
  }

  @media(max-width: 845px){
    width: 100%;
    margin-right: 24px;
  }

  @media(max-width: 360px){
    font-size: 25px;
    line-height: 31px;
    margin: 0;
    margin-bottom: 11px;
  }
`;

export const RightDesc = styled.p`
  width: 50%;
  font-family: Red Ring;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.white};
  
  @media(max-width: 1250px){
    width: 75%;
  }

  @media(max-width: 845px){
    width: 100%;
    margin-right: 24px;
  }

  @media(max-width: 360px){
    margin-right: 0;
  }
`;