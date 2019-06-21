import * as React from "react";
import styled from "styled-components";
import { FormInput } from "../";

const StyledCard = styled.div`
  width: 500px;
  height: 150px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

const Header = styled.h1``;

interface ICardProps {
  title: string;
}

const noop = () => {};

const Card: React.FC<ICardProps> = ({ title }) => {
  const [inputValue, setInputValue] = React.useState("");
  console.log(inputValue);
  return (
    <StyledCard>
      <Header>{title}</Header>
      <FormInput
        onValueChange={setInputValue}
        onButtonClick={noop}
        onEnter={noop}
      />
    </StyledCard>
  );
};

export default Card;
