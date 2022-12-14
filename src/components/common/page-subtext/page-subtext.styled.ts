
import styled from 'styled-components';

const PageSubtext = styled.p`
  margin: 0;
  margin-bottom: 9px;
  padding: 0;

  font-size: ${({ theme }: any) => theme.font.semibase};
  line-height: 144%;

  color: ${({ theme }: any) => theme.color.tangerine};
`;

export { PageSubtext };
