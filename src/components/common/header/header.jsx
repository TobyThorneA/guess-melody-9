import logo from 'assets/img/logo.svg';
import { NAVIGATION_ITEMS } from 'const';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { genreQuest } from 'store/actions';
import * as S from './header.styled';

const Header = () => {
  const dispatch = useDispatch()
   const [isActiveItem, setIsActiveItem] = useState(NAVIGATION_ITEMS[0][0]);

   const handleClickNavigationItem = (evt, item) => {
     evt.preventDefault();
     setIsActiveItem(item);
     if(item === NAVIGATION_ITEMS[0][0]){
       dispatch(genreQuest('All quests'))
     }
   };
  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
            {NAVIGATION_ITEMS.map((it) => {
              return (
                <S.LinkItem key={it[0]} onClick={(evt) => handleClickNavigationItem(evt,it[0])}>
                  <S.Link
                    to={it[1]}
                    $isActiveLink={it[0] === isActiveItem} 
                  >
                    {it[0]}
                  </S.Link>
                </S.LinkItem>
              );
            })}
          {/* <S.LinkItem onClick={() => dispatch(genreQuest('All quests'))}>
            <S.Link $isActiveLink={false} to="/">
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={() => dispatch(genreQuest('All quests'))}>
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={() => dispatch(genreQuest('All quests'))}>
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={() => dispatch(genreQuest('All quests'))}>
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem onClick={() => dispatch(genreQuest('All quests'))}>
            <S.Link to="/contacts">Контакты</S.Link>
          </S.LinkItem> */}
        </S.Links>
      </S.Navigation >
      <S.Phone onClick={() => dispatch(genreQuest('All quests'))} href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
  )
};

export default Header;
