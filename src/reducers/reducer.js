import { createReducer } from "@reduxjs/toolkit";
import { closePopup, genreQuest, loadAllQuestRooms, loadCurrentQuestRoom } from "store/actions";

const defaultData = {
  genre: 'All quests',
  questRooms: [],
  currentQuestRoom: {},
  closePopup:false,
}

export const reducer = createReducer(defaultData, (builder) => {
  builder
    .addCase(loadAllQuestRooms, (state, action) => {
      state.questRooms = action.payload;
    })
    .addCase(loadCurrentQuestRoom, (state, action) => {
      state.currentQuestRoom = action.payload;
    })
    .addCase(genreQuest, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(closePopup, (state, action) => {
      state.closePopup = action.payload;
    })
});
