import { AppThunk, Room } from "../../types";
import { instance } from "../../utils/api";

export enum RoomsActionTypes {
  SET_ALL_ROOMS = "SET_ALL_ROOMS",
  SET_FILTERED_ROOMS = "SET_FILTERED_ROOMS",
}

export type RoomsActions = SetAllRoomsType | SetFilteredRoomsType;

type SetAllRoomsType = {
  type: RoomsActionTypes.SET_ALL_ROOMS;
  payload: {
    allRooms: Array<Room>;
  };
};

type SetFilteredRoomsType = {
  type: RoomsActionTypes.SET_FILTERED_ROOMS;
  payload: {
    filteredRooms: Array<Room>;
  };
};

export const setAllRooms = (rooms: Array<Room>): SetAllRoomsType => {
  return {
    type: RoomsActionTypes.SET_ALL_ROOMS,
    payload: {
      allRooms: rooms,
    },
  };
};

export const setFilteredRooms = (rooms: Array<Room>): SetFilteredRoomsType => {
  return {
    type: RoomsActionTypes.SET_FILTERED_ROOMS,
    payload: {
      filteredRooms: rooms,
    },
  };
};

export const getAllRooms = (): AppThunk => async (dispatch) => {
  try {
    const response = await instance.get("/rooms");
    const rooms: Array<Room> = await response.data;
    dispatch(setAllRooms(rooms));
  } catch (error) {
    console.log(error);
  }
};
