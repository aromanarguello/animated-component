import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Form = styled.form``;
const Input = styled.input`
  height: 19px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid grey;
  border-right: 0;
  padding: 0;
`;
const Button = styled.button`
  background-color: #64b5f6;
  height: 21px;
  border: 0;
  color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

interface IFormInputProps {
  onValueChange: () => void;
  onButtonClick?: () => void;
  onEnter?: () => void;
  placeholder?: string;
}

const FormInput: React.FC<IFormInputProps> = ({
  onValueChange,
  onButtonClick,
  onEnter,
  placeholder = "Enter something..."
}) => {
  return (
    <Container>
      <Form>
        <label>
          Text:
          <Input
            data-testid="formInput"
            placeholder={placeholder}
            onKeyPress={onEnter}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              onValueChange(e.target.value)
            }
          />
        </label>
        <Button onClick={onButtonClick}>Submit</Button>
      </Form>
    </Container>
  );
};

export default FormInput;
