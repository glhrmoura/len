import styled, { css } from 'styled-components';

export interface StyleProps {
  $variant?: string;
  $dense?: boolean;
  $block?: boolean;
  $upper?: boolean;
  $rounded?: boolean;
  $colgap?: number;
}

export const Container = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  cursor: pointer;
  user-select: none;
  column-gap: 4px;

  ${({ $colgap }) => css`
    column-gap: ${$colgap}px;
  `}

  ${({ $rounded }) => $rounded && css`
    border-radius: 50px;
  `}

  ${({ $upper }) => $upper && css`
    text-transform: uppercase;
  `}

  ${({ $block }) => $block && css`
    width: 100%;
  `}
   
  ${({ $dense }) => $dense && css`
    padding: 8px 14px;
  `}
 
  ${({ $variant }) => ({
    'primary': css`
      background-color: #F7552C;
    `,

    'outline': css`
      color: #051A2A;
      background-color: transparent;
      border: 1px solid #051A2A;
     `,

    'dark': css`
      background-color: #051A2A;
    `,

    'light': css`
      color: #051A2A;
      background-color: #FFFFFF;
    `,
  })[$variant]}
`;

