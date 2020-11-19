import { Feedback } from "../../types";
import { FeedbacksActions, FeedbacksActionType } from "./actions";

type StateType = Array<Feedback>;

const initialState: StateType = [];

export default function feedbacksReducer(
  state = initialState,
  action: FeedbacksActions
): StateType {
  switch (action.type) {
    case FeedbacksActionType.SET_FEEDBACKS: {
      return [...action.payload.feedbacks];
    }
    default: {
      return state;
    }
  }
}
