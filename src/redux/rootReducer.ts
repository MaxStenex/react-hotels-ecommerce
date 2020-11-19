import { combineReducers } from "redux";
import { Feedback } from "../types";
import feedbacksReducer from "./feedbacks/reducer";

export type RootState = {
  feedbacks: Array<Feedback>;
};

export const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
});
