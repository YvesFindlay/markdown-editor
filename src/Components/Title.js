import styled from "styled-components";

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.8rem 0;
  margin: 0 0 0 1rem;
  display: inline-block;
  color: #323232;
`;

export const OutputTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.8rem 0;
  margin: 0 0 0 1rem;
  display: block;
  position: relative;
  color: #323232;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 12%;
    height: 2px;
    width: 100%;
    background-color: rgba(100, 0, 0, 0.3);
  }
`;
