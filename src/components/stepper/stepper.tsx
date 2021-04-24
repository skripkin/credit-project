import React from "react";

import {
  Container,
  StepItem,
  Circle,
  Title
} from "./styles";

interface IProps {
  steps: Array<{
    title: string;
    isActive: boolean;
  }>;
};

const Stepper = ({ steps }: IProps) => {
  return (
    <Container>
      {steps.map(({ title, isActive }, i) =>
        <StepItem key={title}>
          <Circle isActive={isActive}>{ i + 1 }</Circle>
          <Title isActive={isActive}>{title}</Title>
        </StepItem>
      )}
    </Container>
  );
};

export default Stepper;
