import React from 'react';

import { Container } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  dense?: boolean;
  block?: boolean;
  upper?: boolean;
  rounded?: boolean;
  colgap?: number;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  icon,
  colgap = 6,
  variant,
  block,
  rounded,
  upper,
  dense,
  ...props
}: ButtonProps) => {
  return (
    <Container
      $colgap={colgap}
      $block={block}
      $variant={variant}
      $dense={dense}
      $upper={upper}
      $rounded={rounded}
      {...props}
    >
      {icon}
      {children}
    </Container>
  );
};
