import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdownEditorContext from "../Store/markdownEditorContext";

const OutputContainer = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  color: #323232;
  background-color: #ececec;
  padding: 2.5rem 2rem 0;
  overflow-y: scroll;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1.1rem;
  word-break: break-all;
`;

export const Result = () => {
  const { markdownText } = useContext(markdownEditorContext);
  return (
    <OutputContainer>
      <ResultArea>
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </ResultArea>
    </OutputContainer>
  );
};
