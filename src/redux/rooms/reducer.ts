import { Room } from "../../types";
import { RoomsActions } from "./actions";

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
    default: {
      return state;
    }
  }
}
