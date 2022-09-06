// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';

const PageHeading = styled.div`
  display: flex;
  flex-direction: column-reverse;

  margin-bottom: 48px;
`;

export { PageHeading };
