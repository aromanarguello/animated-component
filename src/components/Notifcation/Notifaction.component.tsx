import * as React from "react"
import { Card } from "../"

import styled from "styled-components"

const Container = styled.div`
  margin-left: 10px;
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`

const Notification = () => {
  return (
    <Container>
      <Card width={150} height={50}>
        <p>Success!</p>
      </Card>
    </Container>
  )
}

export default Notification
