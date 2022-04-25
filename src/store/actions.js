import { createAction } from "@reduxjs/toolkit";

export const loadAllQuestRooms = createAction('quests/load');
export const loadCurrentQuestRoom = createAction(`quest/load`);
export const genreQuest = createAction(`quest/genre`);
export const closePopup = createAction('popup/close');
