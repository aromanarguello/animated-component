import * as React from "react";
import { Card, FormInput, Notification } from "./components";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Header = styled.h1``;

const noop = () => {};

const App: React.FC<any> = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [props, set] = useSpring(() => ({ opacity: 1 }));

  set({ opacity: isActive ? 1 : 0 });

  return (
    <Layout>
      <Card width={500} height={150}>
        <Header>Enter text</Header>
        <FormInput
          onValueChange={setInputValue}
          onButtonClick={() => setIsActive(!isActive)}
          onEnter={noop}
          value={inputValue}
        />
      </Card>
      <animated.div style={props}>
        <Notification />
      </animated.div>
    </Layout>
  );
};

export default App;
