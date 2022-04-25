import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from '.';
import { createAPI } from '../store/api';
import { closePopup, loadAllQuestRooms, loadCurrentQuestRoom } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OK_CODE } from "const";

const ORDER_POST_FAIL_MESSAGE = 'Ваша бронь не была отправлена. Попробуйте еще раз.';
const ORDER_POST_SUCCESS_MESSAGE = 'БРОНЬ ЗА ВАМИ! =) ЖДЕМ ВАС! =)';
const GET_ERROR = 'Проблемы с запросом';

const api = createAPI();

export const fetchQuestRoomsAction = createAsyncThunk(
  'quests/fetchQuests',
  async () => {
    try{
      const {data} = await api.get('/quests');
      console.log(data)
      store.dispatch(loadAllQuestRooms(data));
    }catch(error){
      toast.configure()
      toast.info(GET_ERROR, error)
    }
  },
);

export const fetchCurrentQuestRoomAction = createAsyncThunk(
  'quest/fetchQuest',
  async (id) => {
    try{
      const {data} = await api.get(`quests/${id}`);
      store.dispatch(loadCurrentQuestRoom(data));
    }catch(error){
      toast.configure()
      toast.info(GET_ERROR, error)
    }
  },
);
export const addBookingAction = createAsyncThunk(

  'booking/addBooking',
  async ({name, peopleCount, phone, isLegal} ) => {
    try{
      await api.post('/orders', {name,peopleCount, phone, isLegal})
      .then((data) => {
        if(data.status === OK_CODE){
          store.dispatch(closePopup(false))
          toast.configure()
          toast.info(ORDER_POST_SUCCESS_MESSAGE)
        }
      })

    }catch(error){
      toast.configure()
      toast.info(ORDER_POST_FAIL_MESSAGE, error)
    }
  },
);
