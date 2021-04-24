import React from "react";

import * as Styled from "./styles";
import * as Components from "../../components";

const LandingPage = () => {
  const [tab, setTab] = React.useState("overview");

  return(
    <>
      <Styled.Container>
        <Styled.CreditTopBox>
          <Styled.CreditTabsContainer>
            <Styled.CreditTabBox onClick={() => setTab("overview")}>
              <Styled.CreditTabTitle isactive={tab === "overview" && true}>Обзор</Styled.CreditTabTitle>
            </Styled.CreditTabBox>
            <Styled.CreditTabBox onClick={() => setTab("conditions")}>
              <Styled.CreditTabTitle isactive={tab === "conditions" && true}>Условия</Styled.CreditTabTitle>
            </Styled.CreditTabBox>
            <Styled.CreditTabBox onClick={() => setTab("questions")}>
              <Styled.CreditTabTitle isactive={tab === "questions" && true}>Вопросы</Styled.CreditTabTitle>
            </Styled.CreditTabBox>
          </Styled.CreditTabsContainer>
          <Components.BankLicense bankIcon="gerb" title="Банк России" license="./license.png" isLarge={true}/>
        </Styled.CreditTopBox>
        <Styled.CreditTitle>Кредит на пополнение оборотных средств</Styled.CreditTitle>
        <Styled.RateContainer>
          <Styled.RateBox>
            <Styled.RateDot/>
            <Styled.RateTitle>Сумма до 5 000 000 ₽</Styled.RateTitle>
          </Styled.RateBox>
          <Styled.RateBox>
            <Styled.RateDot/>
            <Styled.RateTitle>Ставка от 11% годовых</Styled.RateTitle>
          </Styled.RateBox>
          <Styled.RateBox>
            <Styled.RateDot/>
            <Styled.RateTitle>Срок до 12 месяцев</Styled.RateTitle>
          </Styled.RateBox>
        </Styled.RateContainer>
        <Styled.ButtonBox>
          <Components.Button title="Получить кредит" onClick={() => null}/>
        </Styled.ButtonBox>
      </Styled.Container>
      <Styled.BenifitsContainer>
        <Styled.BenifitsTitle>Преимущества оборотного кредита в JetLend</Styled.BenifitsTitle>
        <Styled.BenifitsBoxes>
          <Styled.BenifitsBox>
            <Styled.BenifitsBoxTitle>Решение за 10 секунд</Styled.BenifitsBoxTitle>
            <Styled.BenifitsBoxDesc>Просто загрузите два документы и мы оценим ваш бизнес почти моментально</Styled.BenifitsBoxDesc>
          </Styled.BenifitsBox>
          <Styled.BenifitsBox>
            <Styled.BenifitsBoxTitle>Всё онлайн</Styled.BenifitsBoxTitle>
            <Styled.BenifitsBoxDesc>Без поездок в офис - оформите кредит в личном кабинете</Styled.BenifitsBoxDesc>
          </Styled.BenifitsBox>
          <Styled.BenifitsBox>
            <Styled.BenifitsBoxTitle>Без залога</Styled.BenifitsBoxTitle>
            <Styled.BenifitsBoxDesc>Одобряем кредит для бизнеса на основании оборотов по расчетным счетам</Styled.BenifitsBoxDesc>
          </Styled.BenifitsBox>
        </Styled.BenifitsBoxes>
      </Styled.BenifitsContainer>
    </>
  )
};

export default LandingPage;