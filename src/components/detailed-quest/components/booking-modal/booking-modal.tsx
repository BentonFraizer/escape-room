import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { FormData } from '../../../../types';
import { useRef, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { postOrderAction } from '../../../../store/api-actions';
import { changePostOrderRequestPendingStatus } from '../../../../store/site-process/site-process'
import { getPostOrderRequestPendingStatus } from '../../../../store/site-process/selectors';
import { getError } from '../../../../store/site-data/selectors';
import { setPostOrderError } from '../../../../store/site-data/site-data'

type BookingModalProps = {
  onCloseClick: () => void;
}

const BookingModal = ({onCloseClick}: BookingModalProps) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const peopleCountRef = useRef<HTMLInputElement | null>(null);
  const isLegalRef = useRef<HTMLInputElement | null>(null);
  const postOrderRequestPendingStatus = useAppSelector(getPostOrderRequestPendingStatus);
  const postOrderError = useAppSelector(getError);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorClass, setErrorClass] = useState<string>('');
  const PHONE_NUMBER_LENGTH = 10;

  const dispatch = useAppDispatch();

  const onSubmit = (formData: FormData) => {
    dispatch(changePostOrderRequestPendingStatus(true));
    dispatch(postOrderAction(formData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (postOrderError) {
      evt.preventDefault();
      setErrorMessage('Запрос не был отправлен, попробуйте ещё раз позднее');
      setPostOrderError(false);
    }

    if (nameRef.current !== null && phoneRef.current !== null && peopleCountRef.current !== null && isLegalRef.current !== null) {
      if((phoneRef.current?.value.length === PHONE_NUMBER_LENGTH)){
        onSubmit({
          name: nameRef.current.value,
          peopleCount: Number(peopleCountRef.current.value),
          phone: phoneRef.current.value,
          isLegal: Boolean(isLegalRef.current.value),
        });
      } else {
        setErrorMessage('Номер телефона должен содержать десять цифр');
        setErrorClass('error');
      }
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          disabled={postOrderRequestPendingStatus}
          onClick={(evt) => {
            evt.preventDefault();
            onCloseClick();
          }}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action=""
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">Контактный телефон</S.BookingLabel>
            <S.BookingInput
              className={errorClass}
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">Количество участников</S.BookingLabel>
            <S.BookingInput
              ref={peopleCountRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.ModalErrorMessage>
            {errorMessage}
          </S.ModalErrorMessage>
          <S.BookingSubmit
            disabled={postOrderRequestPendingStatus}
            type="submit"
          >
              Отправить заявку
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isLegalRef}
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
  );
}


export default BookingModal;
