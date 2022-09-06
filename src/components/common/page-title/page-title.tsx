import * as S from './page-title.styled';

const PageTitle = ({
  children,
  ...props
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
