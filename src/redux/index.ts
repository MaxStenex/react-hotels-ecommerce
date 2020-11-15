import { combineReducers, createStore } from "redux";
import feedbacksReducer from "./feedbacks";

const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
