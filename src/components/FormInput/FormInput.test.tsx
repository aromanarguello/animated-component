import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormInput from "./FormInput.component";

describe("Form Input", () => {
  const noop = () => {};
  test("renders form input component and types", () => {
    const formInput = render(<FormInput onValueChange={noop} />);
    const inputNode = formInput.getByTestId("formInput");
    expect(inputNode.value).toBe("");
    fireEvent.change(inputNode, { target: { value: "hi world" } });
    expect(inputNode.value).toMatch("hi world");
  });

  test("clicks button", () => {
    const formInput = render(<FormInput onValueChange={noop} />);
    const buttonNode = formInput.getByText("Submit");
    expect(fireEvent.click(buttonNode)).toBe(true);
  });
});
