
import React from 'react';
import * as S from './button.styled';

const Button = ({
  children,
  ...props
}: any) => (

  <S.Button {...props}>{children}</S.Button>
);

export default Button;
