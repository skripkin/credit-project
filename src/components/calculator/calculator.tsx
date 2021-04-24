import React from "react";
import { ProcentInput, Button } from "../../components";

import * as Styled from "./styles";

const Calculator = () => {
  const [sum, setSum] = React.useState(0);
  const [month, setMonth] = React.useState(0);

  const getSumMonth = Math.round(sum/month);

  const Filter = (num: number): string => {
    return new Intl.NumberFormat("ru-RU").format(num);
  };

  return(
    <Styled.Container>
      <Styled.Title>Калькулятор заемщика</Styled.Title>
      <Styled.FlexBox>
        <Styled.InputContainer>
          <Styled.InputBox>
            <ProcentInput title="Желаемая сумма кредита" startSum={500000} finishSum={10000000} vailut="руб." type="₽" onChange={setSum}/>
          </Styled.InputBox>
          <ProcentInput title="Срок кредита" startSum={1} finishSum={12} vailut="месяцев" type="мес." onChange={setMonth}/>
        </Styled.InputContainer>
        <Styled.SumBox>
          <Styled.SumTitle>Ежемесячный платеж</Styled.SumTitle>
          <Styled.SumNumber>{Filter(getSumMonth)} ₽</Styled.SumNumber>
          <Button title="Получить кредит" onClick={() => null}/>
        </Styled.SumBox>
      </Styled.FlexBox>
    </Styled.Container>
  )
};

export default Calculator;