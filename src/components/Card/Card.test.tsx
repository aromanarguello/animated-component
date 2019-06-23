import * as React from "react"
import Card from "./Card.component"
import { render } from "@testing-library/react"

test("renders card and accepts props", () => {
  const card = render(
    <Card width={500} height={100}>
      Welcome
    </Card>
  )
  expect(card.container.innerHTML).toMatch("Welcome")
})
