// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import * as S from './button.styled';

const Button = ({
  children,
  ...props
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
