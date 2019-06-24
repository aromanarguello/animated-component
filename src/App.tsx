import * as React from "react"
import { Card, FormInput, Notification } from "./components"
import { useSpring, animated, useTransition } from "react-spring"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Header = styled.h1``

const Icon = styled(FontAwesomeIcon)`
  color: green;
`

const noop = () => {}

const App: React.FC<any> = () => {
  const [inputValue, setInputValue] = React.useState("")
  const [isActive, setIsActive] = React.useState(false)

  const transitions = useTransition(isActive, null, {
    from: { opacity: 0 },
    enter: { opacity: 0 },
    leave: { opacity: 1 }
  })

  const [props, set] = useSpring(() => ({
    opacity: 1,
    color: inputValue === "" ? "red" : "green",
    config: {
      mass: 100,
      tension: 350,
      friction: 300
    }
  }))

  set({
    opacity: isActive ? 1 : 0,
    color: inputValue === "" ? "red" : "green"
  })

  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <Layout>
      <Card width={500} height={150}>
        <Header>Enter text</Header>
        <FormInput
          onValueChange={setInputValue}
          onButtonClick={handleOnClick}
          onEnter={noop}
          value={inputValue}
        />
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <Icon icon={faCheck} />
              </animated.div>
            )
        )}
      </Card>
      <animated.div style={props}>
        <Notification msg={inputValue === "" ? "Enter Text" : "Success"} />
      </animated.div>
    </Layout>
  )
}

export default App
