import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviewCard } from ".";
import { getAllRooms } from "../../redux/rooms/actions";
import { RootState } from "../../redux/rootReducer";
import { Room } from "../../types";
import { Preloader, Error404 } from "../common";

type Props = {
  ref: React.Ref<HTMLElement | null>;
};

const RoomPreview: React.FC<Props> = React.forwardRef((props, ref) => {
  const rooms: Array<Room> = useSelector((state: RootState) => state.rooms.filteredRooms);
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      await dispatch(getAllRooms());
      setLoading(false);
    })();
  }, [dispatch]);

  if (!loading && rooms.length === 0) {
    return <Error404 />;
  }

  return !loading ? (
    <section style={{ paddingBottom: 20 }} ref={ref}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {rooms.map(
            (room: Room): React.ReactNode => {
              return (
                <PreviewCard
                  key={room.id}
                  image={room.previewImage}
                  beds={room.beds}
                  price={room.price}
                  name={room.name}
                  peoples={room.totalPeoples}
                  roomLevel={room.roomLevel}
                  id={room.id}
                />
              );
            }
          )}
        </Grid>
      </Container>
    </section>
  ) : (
    <Preloader />
  );
});

export default RoomPreview;
