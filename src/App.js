import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Components/Title";
import { MarkdownInput } from "./Components/MarkdownInput";
import { Result } from "./Components/Result";
import markdownEditorContext from "./Store/markdownEditorContext";

const Container = styled.div`
  background-color: #323232;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.8rem 0;
  margin: 0 0 0 1rem;
  display: inline-block;
`;

const MarkdownEditor = styled.div`
  display: flex;
  background-color: #323232;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  const [markdownText, setMarkdownText] = useState("");

  const currentContextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <markdownEditorContext.Provider value={currentContextValue}>
      <Container>
        <Heading>Markdown Editor</Heading>
        <MarkdownEditor>
          <MarkdownInput />
          <Result />
        </MarkdownEditor>
      </Container>
    </markdownEditorContext.Provider>
  );
};

export default App;
