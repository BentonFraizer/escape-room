import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorror } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useAppSelector } from '../../../../hooks';
import { getQuests } from '../../../../store/site-data/selectors';
import { useEffect } from 'react';
import { fetchQuestsAction } from '../../../../store/api-actions';
import { useAppDispatch } from '../../../../hooks';
import { ComplexityLevel, TYPES } from '../../../../consts';
import { getType } from '../../../../store/site-process/selectors';
import { changeType } from '../../../../store/site-process/site-process';

const QuestsCatalog = () => {
  const questsList = useAppSelector(getQuests);
  const dispatch = useAppDispatch();
  const currentType = useAppSelector(getType);
  
  const filteredQuestsList = questsList.filter((quest) => {
    if (currentType === 'all quests') {
      return questsList;
    }

    return quest.type === currentType;
  });

  const getComplexityLevel = (level: string): string => {
    switch(level) {
      case ComplexityLevel.Easy:
        return 'простой';
      case ComplexityLevel.Medium:
        return 'средний';
      case ComplexityLevel.Hard:
        return 'сложный';
    }
    return '';
  }

  const getIconComponent = (type: string):JSX.Element => {
    switch(type) {
      case TYPES[0].en:
        return <IconAllQuests />;
      case TYPES[1].en:
        return <IconAdventures />;
      case TYPES[2].en:
        return <IconHorror />;
      case TYPES[3].en:
        return <IconMystic />;
      case TYPES[4].en:
        return <IconDetective />;
      case TYPES[5].en:
        return <IconScifi />;
    }
    return <></>;
  }

  useEffect(() => {
    if(questsList.length === 0) {
      dispatch(fetchQuestsAction());
    }
  }, [dispatch, questsList]);

  return (
    <>
      <S.Tabs>
        {
          TYPES.map((type) => {
            let isActiveButton = false;
            if(type.en.toLowerCase() === currentType) {
              isActiveButton = true;
            } else {
              isActiveButton = false;
            }
            return(
              <S.TabItem key={type.id}>
                <S.TabBtn
                  isActive={isActiveButton}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(changeType(type.en.toLowerCase()));
                  }}
                >
                  {getIconComponent(type.en)}
                  <S.TabTitle>{type.ru}</S.TabTitle>
                </S.TabBtn>
              </S.TabItem>
            );
          })
        }
      </S.Tabs>

      <S.QuestsList>
        {
          filteredQuestsList.map((quest) => (
            <S.QuestItem key={quest.id}>
              <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={quest.previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${quest.title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{quest.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${quest.peopleCount[0]}-${quest.peopleCount[1]}`} чел
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                          {getComplexityLevel(quest.level)}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          ))
        }
      </S.QuestsList>
    </>
  );
}


export default QuestsCatalog;
