
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  margin: 0;
  padding-top: 22px;
  padding-right: 47px;
  padding-bottom: 23px;
  padding-left: 48px;

  font-family: inherit;
  font-size: ${({
  theme
}: any) => theme.font.upperbase};
  line-height: 20px;
  letter-spacing: 0.03em;
  font-weight: 800;
  text-transform: uppercase;

  color: ${({
  theme
}: any) => theme.color.white};
  background-color: ${({
  theme
}: any) => theme.color.tangerine};
  border: none;
  border-radius: 65px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${({
  theme
}: any) => theme.color.carrotOrange};
  }

  &:active {
    opacity: 0.8;
  }
`;

export { Button };
