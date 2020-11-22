import React from "react";
import { Room } from "../types";
import { instance } from "../utils/api";
import { withRouter, RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps<{ id: string }>;

const RoomPage: React.FC<Props> = ({ match }) => {
  const [room, setRoom] = React.useState<Room | undefined>(undefined);

  React.useEffect(() => {
    instance.get("/rooms").then((response) => {
      const rooms: Array<Room> = response.data;
      const room = rooms.filter((room: Room) => room.id === +match.params.id)[0];
      setRoom(room);
    });
  }, [match.params.id]);

  return <h1>{JSON.stringify(room)}</h1>;
};

export default withRouter(RoomPage);
