import { combineReducers } from "redux";
import { Feedback, Room } from "../types";
import feedbacksReducer from "./feedbacks/reducer";
import roomsReducer from "./rooms/reducer";

export type RootState = {
  feedbacks: Array<Feedback>;
  rooms: {
    allRooms: Array<Room>;
  };
};

export const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
  rooms: roomsReducer,
});
