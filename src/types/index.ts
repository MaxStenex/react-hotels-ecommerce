import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../redux/rootReducer";

export type Feedback = {
  name: string;
  avatarURL: string;
  text: string;
};

export type Room = {
  id: number;
  price: number;
  beds: number;
  totalPeoples: number;
  roomLevel: string;
  name: string;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
