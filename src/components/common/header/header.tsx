import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';
import { changeType } from '../../../store/site-process/site-process';
import { useAppDispatch } from '../../../hooks';
import { TYPES } from '../../../consts';
import { useEffect, useState } from 'react';
import { AppRoute } from '../../../consts';

const Header = () => {
  const dispatch = useAppDispatch();
  const [isActiveLinkQuests, setIsActiveLinkQuests] = useState<boolean>(true);
  const [isActiveLinkContacts, setIsActiveLinkContacts] = useState<boolean>(false);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === '/') {
      setIsActiveLinkQuests(true);
      setIsActiveLinkContacts(false)
    } else {
      setIsActiveLinkQuests(false);
      setIsActiveLinkContacts(true);
    }
  }, [pathName]);

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink
          to={AppRoute.Main}
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
                $isActiveLink={isActiveLinkQuests}
                to={AppRoute.Main}
                onClick={() => {
                  dispatch(changeType(TYPES[0].en.toLowerCase()));
                }}
              >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#" $isActiveLink={false}>Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#" $isActiveLink={false}>Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#" $isActiveLink={false}>Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={isActiveLinkContacts}
                to={AppRoute.Contacts}
                >
              Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
