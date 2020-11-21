import { Room } from "../../types";
import { RoomsActions, RoomsActionTypes } from "./actions";

export type RoomsStateType = {
  allRooms: Array<Room>;
  filteredRooms: Array<Room>;
};

const initialState: RoomsStateType = {
  allRooms: [],
  filteredRooms: [],
};

export default function roomsReducer(
  state = initialState,
  action: RoomsActions
): RoomsStateType {
  switch (action.type) {
    case RoomsActionTypes.SET_ALL_ROOMS: {
      return { ...state, allRooms: action.payload.allRooms };
    }
    case RoomsActionTypes.SET_FILTERED_ROOMS: {
      return { ...state, filteredRooms: action.payload.filteredRooms };
    }
    default: {
      return state;
    }
  }
}
