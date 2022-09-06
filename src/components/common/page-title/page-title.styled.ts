// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({
  theme
}: any) => theme.font.semilarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({
  theme
}: any) => theme.color.white};
`;

export { PageTitle };
