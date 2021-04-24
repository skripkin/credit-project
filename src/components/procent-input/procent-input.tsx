import React from "react";

import * as Styled from "./styles";

interface IProp {
  title: string;
  startSum: number;
  finishSum: number;
  vailut: string;
  type: string;
  onChange: (value: number) => void;
}

const ProcentInput = ({ title, startSum, finishSum, vailut, type, onChange }: IProp) => {
  const [inputValue, setInputValue] = React.useState("");

  const getProgress = () => {
    return Number(inputValue.match(/\d/g)?.join("")) * 100 / finishSum;
  };

  const Filter = (num: number): string => {
    return new Intl.NumberFormat("ru-RU").format(num);
  };

  const FilterNumber = (str: string) => {
    setInputValue(Filter(+str.replace(/\s/g, "")));
  }

  return(
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.InputBox>
        <Styled.Input type="text" 
          value={inputValue}
          onChange={(e) => {FilterNumber(e.target.value); onChange(Number(e.target.value.match(/\d/g)?.join("")))}}
          onFocus={() => FilterNumber(inputValue.match(/\d/g)?.join("") || "0")}
          onBlur={() => setInputValue(Filter(Number(inputValue.match(/\d/g)?.join(""))) + " " + type || "0")}
          />
        <Styled.ProgressBox>
          <Styled.ProgresLine progress={getProgress() >= 100 ? 100 : getProgress()}/>
          <Styled.ProgresDot>
            <Styled.WhiteDot />
          </Styled.ProgresDot>
        </Styled.ProgressBox>
      </Styled.InputBox>
      <Styled.DescFlex>
        <Styled.BottomTitle>{startSum} {vailut}</Styled.BottomTitle>
        <Styled.BottomTitle>{finishSum} {vailut}</Styled.BottomTitle>
      </Styled.DescFlex>
    </Styled.Container>
  )
};

export default ProcentInput;