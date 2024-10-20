import React, { useState } from 'react';

import {
  Global,
  Container,
  Content,
  TextArea,
  CharLenContainer,
  CharLen
} from '@popup/popup.styles';

export const Popup = () => {
  const [charLen, setCharLen] = useState<number>(0);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const len = event.target.value?.length || 0;
    setCharLen(len);
    chrome.runtime.sendMessage({ charLen: len });
  };

  const onPaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const len = event.clipboardData.getData('text')?.length || 0;
    setCharLen(len);
    chrome.runtime.sendMessage({ charLen: len });
  };

  return (
    <Container>
      <Global />
      <Content>
        <TextArea placeholder="Type some text" onPaste={onPaste} onChange={onChange} />
        <CharLenContainer>
          <CharLen>{charLen}</CharLen>
        </CharLenContainer>
      </Content>
    </Container>
  );
};
