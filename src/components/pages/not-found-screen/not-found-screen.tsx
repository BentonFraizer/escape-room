import logo from '../../../assets/img/logo.svg'
import * as S from './not-found-screen.styled';

const NotFoundScreen = () => (
  <S.Main>
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.LogoLink to="/">
            <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
          </S.LogoLink>
        </S.Logo>
      </S.HeaderWrapper>
    </S.StyledHeader>

    <S.PageSubtext>
      Ошибка 404
    </S.PageSubtext>
    <S.PageSubtext>
      Страница не найдена
    </S.PageSubtext>
    <S.PageSubtext>
      <S.Link to="/">
        (Вернуться на главную)
      </S.Link>
    </S.PageSubtext>
  </S.Main>
);

export default NotFoundScreen;
