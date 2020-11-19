import { Feedback } from "../../types";
import { instance } from "../../utils/api";
import { AppThunk } from "../../types";

export enum FeedbacksActionType {
  SET_FEEDBACKS = "feedbacks/SET_FEEDBACKS",
}

export type FeedbacksActions = SetFeedbacksAction;

type SetFeedbacksAction = {
  type: FeedbacksActionType.SET_FEEDBACKS;
  payload: {
    feedbacks: Array<Feedback>;
  };
};

export const setFeedbacks = (feedbacks: Array<Feedback>): SetFeedbacksAction => {
  return {
    type: FeedbacksActionType.SET_FEEDBACKS,
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
