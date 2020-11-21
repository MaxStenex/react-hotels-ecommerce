import { combineReducers } from "redux";
import feedbacksReducer, { FeedbacksStateType } from "./feedbacks/reducer";
import roomsReducer, { RoomsStateType } from "./rooms/reducer";

export type RootState = {
  feedbacks: FeedbacksStateType;
  rooms: RoomsStateType;
};

export const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
  rooms: roomsReducer,
});
