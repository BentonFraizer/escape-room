import * as S from './page-heading.styled';

const PageHeading = ({
  children,
  ...props
}: any) => (

  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
