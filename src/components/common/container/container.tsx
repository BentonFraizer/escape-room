import * as S from './container.styled';

const Container = ({
  children,
  ...props
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
