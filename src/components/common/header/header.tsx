import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';
import { changeType } from '../../../store/site-process/site-process';
import { useAppDispatch } from '../../../hooks';
import { TYPES } from '../../../consts';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink
          to="/"
          onClick={() => {
            dispatch(changeType(TYPES[0].en.toLowerCase()));
          }}
        >
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                isActiveLink
                to="/"
                onClick={() => {
                  dispatch(changeType(TYPES[0].en.toLowerCase()));
                }}
              >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="/contacts">Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
