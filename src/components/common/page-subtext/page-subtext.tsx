import * as S from './page-subtext.styled';

const PageSubtext = ({
  children,
  ...props
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
