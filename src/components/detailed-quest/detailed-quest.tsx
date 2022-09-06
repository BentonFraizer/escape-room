// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useState } from 'react';
// @ts-expect-error TS(2307): Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
import { MainLayout } from 'components/common/common';
// @ts-expect-error TS(2307): Cannot find module 'assets/img/icon-clock.svg' or ... Remove this comment to see the full error message
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
// @ts-expect-error TS(2307): Cannot find module 'assets/img/icon-person.svg' or... Remove this comment to see the full error message
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
// @ts-expect-error TS(2307): Cannot find module 'assets/img/icon-puzzle.svg' or... Remove this comment to see the full error message
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainLayout>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <S.Main>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <S.PageImage
          src="img/cover-maniac.jpg"
          alt="Квест Маньяк"
          width="1366"
          height="768"
        />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <S.PageContentWrapper>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <S.PageHeading>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.PageTitle>Маньяк</S.PageTitle>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.PageSubtitle>приключения</S.PageSubtitle>
          </S.PageHeading>

          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <S.PageDescription>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.Features>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <S.FeaturesItem>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <IconClock width="20" height="20" />
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <S.FeatureTitle>90 мин</S.FeatureTitle>
              </S.FeaturesItem>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <S.FeaturesItem>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <IconPerson width="19" height="24" />
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <S.FeatureTitle>3–6 чел</S.FeatureTitle>
              </S.FeaturesItem>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <S.FeaturesItem>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <IconPuzzle width="24" height="24" />
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <S.FeatureTitle>средний</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.QuestDescription>
              В комнате с приглушённым светом несколько человек, незнакомых друг
              с другом, приходят в себя. Никто не помнит, что произошло прошлым
              вечером. Руки и ноги связаным, но одному из вас получилось
              освободиться. На стене висит пугающий таймер и запущен отстёт
              60&nbsp;минут. Сможете ли вы разобраться в стрессовой ситуации,
              помочь другим, разобраться что произошло и выбраться из комнаты?
            </S.QuestDescription>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
