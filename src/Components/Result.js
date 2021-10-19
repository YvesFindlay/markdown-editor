import React, { useContext } from "react";
// import { OutputTitle } from "./Title";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import markdownEditorContext from "../Store/markdownEditorContext";

const OutputContainer = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  color: #323232;
  background-color: #ececec;
  padding: 0 2rem;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
  padding-top: 1rem;
`;

export const Result = () => {
  const { markdownText } = useContext(markdownEditorContext);
  return (
    <OutputContainer>
      {/* <OutputTitle>Output</OutputTitle> */}
      <ResultArea>
        <ReactMarkdown style={{ paddingTop: "1rem" }} children={markdownText} />
      </ResultArea>
    </OutputContainer>
  );
};
