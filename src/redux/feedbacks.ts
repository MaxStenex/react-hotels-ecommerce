import { Feedback } from "../types";
import { instance } from "./../utils/api";
import { AppThunk } from "./index";

const SET_FEEDBACKS = "feedbacks/SET_FEEDBACKS";

type StateType = Array<Feedback>;

const initialState: StateType = [];

export default function feedbacksReducer(
  state = initialState,
  action: ActionTypes
): StateType {
  switch (action.type) {
    case SET_FEEDBACKS: {
      return [...action.payload.feedbacks];
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = SetFeedbacksAction;

type SetFeedbacksAction = {
  type: typeof SET_FEEDBACKS;
  payload: {
    feedbacks: Array<Feedback>;
  };
};

export const setFeedbacks = (
  feedbacks: Array<Feedback>
): SetFeedbacksAction => {
  return {
    type: SET_FEEDBACKS,
    payload: {
      feedbacks,
    },
  };
};

export const getFeedbacks = (): AppThunk => async (dispatch) => {
  try {
    const response = await instance.get("feedbacks");
    dispatch(setFeedbacks(response.data));
  } catch (err) {
    console.log(err);
  }
};
