import { Feedback } from "../../types";
import { FeedbacksActions, FeedbacksActionType } from "./actions";

export type FeedbacksStateType = Array<Feedback>;

const initialState: FeedbacksStateType = [];

export default function feedbacksReducer(
  state = initialState,
  action: FeedbacksActions
): FeedbacksStateType {
  switch (action.type) {
    case FeedbacksActionType.SET_FEEDBACKS: {
      return [...action.payload.feedbacks];
    }
    default: {
      return state;
    }
  }
}
