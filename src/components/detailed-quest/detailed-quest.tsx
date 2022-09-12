import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestAction } from '../../store/api-actions';
import { getQuest } from '../../store/site-data/selectors';
import { useParams } from 'react-router-dom';
import { getComplexityLevel } from '../../utils/utils';
import { TYPES } from '../../consts';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen'
import { getPostOrderRequestStatus } from '../../store/site-process/selectors';
import { changePostOrderRequestStatus, changePostOrderRequestPendingStatus } from '../../store/site-process/site-process';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const dispatch = useAppDispatch();
  const {id} = useParams() as {id: string};
  const quest = useAppSelector(getQuest);
  const postOrderRequestStatus = useAppSelector(getPostOrderRequestStatus);

  useEffect(() => {
    dispatch(fetchQuestAction(Number(id)));
  }, [dispatch, id])

  useEffect(() => {
    if (postOrderRequestStatus) {
      setIsBookingModalOpened(false);
      dispatch(changePostOrderRequestStatus(false));
      dispatch(changePostOrderRequestPendingStatus(false));
    }
  }, [dispatch, postOrderRequestStatus])

  if (!quest) {
    return <NotFoundScreen/ >;
  }

  const { title, description, coverImg, duration, peopleCount, level, type } = quest;

  const getType = (currentType: string): string => {
    switch(currentType) {
      case TYPES[1].en.toLowerCase():
        return 'Приключения';
      case TYPES[2].en.toLowerCase():
        return 'Ужасы';
      case TYPES[3].en.toLowerCase():
        return 'Мистика';
      case TYPES[4].en.toLowerCase():
        return 'Детектив';
      case TYPES[5].en.toLowerCase():
        return 'Sci-fi';
    }
    return '';
  }

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`http://localhost:3000/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getType(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}-${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getComplexityLevel(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseClick={onCloseBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
