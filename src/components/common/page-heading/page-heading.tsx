import * as S from './page-heading.styled';

const PageHeading = ({
  children,
  ...props
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
