import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import narutoImage from './images/naruto.png';
import { Quotes } from './components';
import { QuotesNaruto } from './resources'; 
import jutsuSound from './sounds/jutso.mp3';

const audio = new Audio(jutsuSound);

function App() {
  const isMunted = useRef(true);

  const [quoteState, setQuoteState] = useState({ quote: "loading quote...", speaker: "loading Speaker..." });

  const onUpdate = () => { 
    let i = Math.floor( Math.random() * QuotesNaruto.length );
    console.log("Posição: "+ i + " do total de " + QuotesNaruto.length + " Frases...");

    const [speaker, quote] = QuotesNaruto[i];
    if(isMunted.current) {
      setQuoteState({quote, speaker});
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();
    return () => isMunted.current = false;
  }, [])

  return (
    <Content className="App">
      
      <Quotes 
        {...quoteState}
        onUpdate={onUpdate} 
      />
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
