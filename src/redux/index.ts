import { combineReducers, createStore, applyMiddleware, Action } from "redux";
import feedbacksReducer from "./feedbacks";
import thunk, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  feedbacks: feedbacksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
