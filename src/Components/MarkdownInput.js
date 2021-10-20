import React, { useContext } from "react";
import styled from "styled-components";
import markdownEditorContext from "../Store/markdownEditorContext";

const InputContainer = styled.div`
  flex-basis: 50%;
  height: 100%;
  box-sizing: border-box;
  color: #323232;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: #f6f6f6;
  padding: 1rem 2rem 0;
`;

export const MarkdownInput = () => {
  const { setMarkdownText } = useContext(markdownEditorContext);

  const textInputHandler = (evt) => {
    setMarkdownText(evt.target.value);
  };

  return (
    <InputContainer>
      <TextArea onChange={textInputHandler} />
    </InputContainer>
  );
};
