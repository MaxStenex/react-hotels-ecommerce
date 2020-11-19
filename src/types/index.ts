import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../redux/rootReducer";

export type Feedback = {
  name: string;
  avatarURL: string;
  text: string;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
