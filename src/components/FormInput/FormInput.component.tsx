import * as React from "react"
import { Container, Form, Input, Button } from "./FormInput.styles"

interface IFormInputProps {
  onValueChange: (e: string) => void
  onButtonClick?: () => void
  onEnter?: () => void
  placeholder?: string
  value: string
}

const FormInput: React.FC<IFormInputProps> = ({
  onValueChange,
  onButtonClick,
  onEnter,
  value,
  placeholder = "Enter something..."
}) => {
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <Container>
      <Form>
        <label>
          Text:
          <Input
            ref={inputRef}
            data-testid="formInput"
            placeholder={placeholder}
            onKeyPress={onEnter}
            value={value}
            onChange={(e: any) => onValueChange(e.target.value)}
          />
        </label>
        <Button onClick={onButtonClick}>Submit</Button>
      </Form>
    </Container>
  )
}

export default FormInput
