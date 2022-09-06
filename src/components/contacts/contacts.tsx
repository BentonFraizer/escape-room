// @ts-expect-error TS(2307): Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
// @ts-expect-error TS(2307): Cannot find module 'assets/img/contacts-map.jpg' o... Remove this comment to see the full error message
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';

const Contacts = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <MainLayout>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <S.Main>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <S.ContentWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <S.PageHeading>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <PageTitle>Контакты</PageTitle>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <S.Contacts>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <S.ContactsList>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactTitle>Адрес</S.ContactTitle>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactValue>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <S.ContactAddress>
                Санкт-Петербург,
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <br />
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactTitle>Режим работы</S.ContactTitle>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactTitle>Телефон</S.ContactTitle>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactValue>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </S.ContactLink>
            </S.ContactValue>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactTitle>E-mail</S.ContactTitle>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactValue>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <S.ContactsMap>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.ContactsMapImage
              src={contactsMap}
              alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
              width="649"
              height="336"
            />
          </S.ContactsMap>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
