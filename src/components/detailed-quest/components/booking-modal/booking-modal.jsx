import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookingAction } from 'store/api-actions';
import { closePopup } from 'store/actions';

const BookingModal = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: '',
    peopleCount: 0,
    phone: '',
    isLegal: true,
  });
  const formChangeHandler = (evt) => {
    evt.preventDefault();
    const formData = {
      'name': formValues.name,
      'peopleCount': formValues.peopleCount,
      'phone': formValues.phone,
      'isLegal': formValues.isLegal,
    }
    dispatch(addBookingAction(formData))
  }

  return(
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn >
          <IconClose onClick={() => dispatch(closePopup(false))} width="16" height="16" />
          <S.ModalCloseLabel >Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          // action="https://echo.htmlacademy.ru"
          action="http://localhost:3001/orders"
          method="post"
          id="booking-form"
          onSubmit={formChangeHandler}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              onChange={(evt) => setFormValues({
                name: evt.target.value,
                peopleCount: formValues.peopleCount,
                phone: formValues.phone,
                isLegal: formValues.isLegal
              })}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              onChange={(evt) => setFormValues({
                name: formValues.name,
                peopleCount: formValues.peopleCount,
                phone: evt.target.value,
                isLegal: formValues.isLegal
              })}
              minLength={10}
              maxLength={10}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              onChange={(evt) => setFormValues({
                name: formValues.name,
                peopleCount: Number(evt.target.value),
                phone: formValues.phone,
                isLegal: formValues.isLegal
              })}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit >Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              onChange={() => setFormValues({
                name: formValues.name,
                peopleCount: formValues.peopleCount,
                phone: formValues.phone,
                isLegal: !formValues.isLegal
              })}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
}

export default BookingModal;
