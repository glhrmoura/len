import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }

  body {
    margin: 0px;
  }
`;

export const Container = styled.div`
  width: 360px;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border: 4px dashed #000000;
  outline: none;
  font-size: 14px;
  font-weight: 200;
  padding: 12px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #207CF7;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const CharLenContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const CharLen = styled.span`
  font-size: 12px;
  font-weight: 900;
`;
