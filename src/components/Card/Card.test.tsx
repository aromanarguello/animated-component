import * as React from "react"
import Card from "./Card.component"
import { render } from "@testing-library/react"

test("renders card and accepts props", () => {
  const card = render(<Card title="Welcome" />)
  expect(card.container.innerHTML).toMatch("Welcome")
})
