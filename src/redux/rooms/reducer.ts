import { Room } from "../../types";
import { RoomsActions, RoomsActionTypes } from "./actions";

type StateType = {
  allRooms: Array<Room>;
};

const initialState: StateType = {
  allRooms: [],
};

export default function roomsReducer(
  state = initialState,
  action: RoomsActions
): StateType {
  switch (action.type) {
    case RoomsActionTypes.SET_ALL_ROOMS: {
      return { ...state, allRooms: action.payload.allRooms };
    }
    default: {
      return state;
    }
  }
}
