import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { genreQuest } from 'store/actions';
import { levels } from '../../../../util';

const peopleCount = (people) => {
  if(people){
    return people.join('-') + 'чел'
  }
};

const catalogNames = [
  {
    name: 'All quests',
    nameView:'Все квесты',
    component: <IconAllQuests />,
  },
  {
    name: 'adventures',
    nameView:'Приключения',
    component: <IconAdventures />,
  },
  {
    name: 'horror',
    nameView:'Ужасы',
    component: <IconHorrors />,
  },
  {
    name: 'mystic',
    nameView:'Мистика',
    component: <IconMystic />,
  },
  {
    name: 'detective',
    nameView:'Детектив',
    component: <IconDetective />,
  },
  {
    name: 'sci-fi',
    nameView:'Sci-fi',
    component: <IconScifi />,
  },
]

const QuestsCatalog = () => {
  const dispatch = useDispatch();
  const questRooms = useSelector((state) => state.questRooms);
  const questType = useSelector((state) => state.genre);

  const filterQuestRooms = questRooms.filter((it) => {
    if(questType === 'All quests'){
      return it;
    }
    return it.type === questType
  })

  return (
    <>
      <S.Tabs>
        {catalogNames.map((it) => {
          return (
          <S.TabItem  key={it.name}>
            <S.TabBtn isActive={it.name === questType} onClick={() => {
              dispatch(genreQuest(it.name))
              }}>
              {it.component}
              <S.TabTitle >{it.nameView}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
          )
        })}

      </S.Tabs>

      <S.QuestsList>
        {filterQuestRooms.map((it) => {
          return (
            <S.QuestItem key={it.id}>
              <S.QuestItemLink to={`/detailed-quest/${it.id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={it.previewImg}
                    width="344"
                    height="232"
                    alt={it.title}
                  />
                  <S.QuestContent>
                    <S.QuestTitle>{it.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {peopleCount(it.peopleCount)}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {/* {it.level} */}
                        {levels(it.level)}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          )
        })}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
