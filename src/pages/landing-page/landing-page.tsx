import React from "react";

import * as Styled from "./styles";
import * as Components from "../../components";

const Partners = ["forbs", "comersant", "rbk", "vision", "vc", "republic", "banki"];

const LandingPage = () => {
  const [tab, setTab] = React.useState("overview");
  const [isclick, setIsclick] = React.useState(false);

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
      <Styled.CalculatorContainer>
        <Styled.CalcTitle>Как получить оборотный кредит</Styled.CalcTitle>
        <Styled.StepBox>
          <Components.Stepper steps={[
            {
              title: "Пройдите регистрацию",
              isActive: true
            },
            {
              title: "Получите предварительное решение",
              isActive: false
            },
            {
              title: "Пройдите верификацию и получите деньги",
              isActive: false
            }
          ]}/>
        </Styled.StepBox>
        <Styled.CalcBox>
          <Components.Calculator />
        </Styled.CalcBox>
      </Styled.CalculatorContainer>
      <Styled.PartnersContainer>
        <Styled.PartnersTitle>СМИ о нас <Styled.PartnersLink href="#">Наши партнеры</Styled.PartnersLink></Styled.PartnersTitle>
        <Styled.PartnerCardBox>
          {Partners.map(item =>
            <Styled.Partner key={item}>
              <Components.PartnerCard icon={item}/>
            </Styled.Partner>
          )}
        </Styled.PartnerCardBox>
      </Styled.PartnersContainer>
      <Styled.AboutBox>
        <Styled.LeftBox>
          {!isclick ?
            <Styled.FrameLock onClick={() => setIsclick(!isclick)}/>
          :
            <Styled.YoutubeFrame width="100%" height="420px" src="https://www.youtube.com/embed/NoKqKjTUMw0" title="YouTube video player" allow="autoplay"></Styled.YoutubeFrame>
          }
        </Styled.LeftBox>
        <Styled.RightBox>
          <Styled.RightTitle>Jetlend — надежный партнер</Styled.RightTitle>
          <Styled.RightDesc>Спонсорство искажает бренд. Диктат потребителя, как принято считать, обычно правомочен. Стоит отметить, что управление брендом исключительно экономит потребительский conversion rate, отвоевывая свою долю рынка. Повышение жизненных стандартов притягивает опрос, учитывая современные тенденции. Повторный контакт, в рамках сегодняшних воззрений, версифицирован. Селекция бренда традиционно консолидирует рейтинг.</Styled.RightDesc>
        </Styled.RightBox>
      </Styled.AboutBox>
    </>
  )
};

export default LandingPage;