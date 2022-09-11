import styled from "styled-components";
import { Container, Link as RouterLink} from "../../common/common";

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    max-width: initial;
    padding-left: 32px;
    padding-right: 33px;
  }

  &:after {
    content: '';
    z-index: 4;
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px;

    background: linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%);
    opacity: 0.8;
    pointer-events: none;
  }
`;

const StyledHeader = styled.header`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 50%;

  width: 100vw;

  transform: translateX(-50%);
  background-color: rgba(26, 26, 26, 0.9);
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: flex-start;
  min-height: 74px;
  padding-top: 23px;
  padding-right: 33px;
  padding-bottom: 23px;
  padding-left: 32px;
`;

const PageSubtext = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;

const Link = styled(RouterLink)<{$isActiveLink?: boolean}>`
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 400;
  text-decoration: underline;
  font-size: 30px;

  color: ${({ theme }: any) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }: any) => theme.color.tangerine};
  }
`;

const Logo = styled.a`
  margin-right: 250px;

  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const LogoLink = styled(RouterLink)`
  margin-right: 250px;

  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const Image = styled.img``;



export { Main, PageSubtext, Link, Logo, LogoLink, Image, StyledHeader, HeaderWrapper,};
