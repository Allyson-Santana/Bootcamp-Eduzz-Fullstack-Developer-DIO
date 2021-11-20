import React from "react";
import styled from 'styled-components';
import narutoImage from './images/naruto.png';
import { Quotes } from './components';

function App() {
  return (
    <Content className="App">
      
      <Quotes quote={'ok'} speaker={"Speaker"} />
      <NarutoImage src={narutoImage} alt="Narute With a Kunai" />

    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0, 50px;
  display: flex;
  justify-content: center;
  align-Items: center;
`;

const NarutoImage = styled.img`
  max-width: 50vw;
  align-seft: flex-end;
`;

export default App;
