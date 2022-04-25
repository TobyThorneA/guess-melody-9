import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {store} from '../../store/index'
import { fetchCurrentQuestRoomAction } from 'store/api-actions';
import { closePopup } from 'store/actions';
import { levels, types } from '../../util';

const peopleCount = (people) => {
  if(people){
    return people.join('-') + 'чел'
  }
};

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.closePopup);
  const questRoom = useSelector((state) => state.currentQuestRoom);
  const {id} = useParams();
  useEffect(()=> {
    store.dispatch(fetchCurrentQuestRoomAction(id))
  }, [id])

  const onBookingBtnClick = () => {
    dispatch(closePopup(true))
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../../${questRoom.coverImg}`}
          alt={`Квест ${questRoom.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{questRoom.title}</S.PageTitle>
            <S.PageSubtitle>{types(questRoom.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{questRoom.duration}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {peopleCount(questRoom.peopleCount)}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{levels(questRoom.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {questRoom.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {openPopup && isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
