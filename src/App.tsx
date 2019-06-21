import * as React from "react";
import { Card } from "./components";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const App: React.FC<any> = () => {
  return (
    <Layout>
      <Card title="Enter text" />
    </Layout>
  );
};

export default App;
