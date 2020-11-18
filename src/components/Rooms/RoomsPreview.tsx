import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { PreviewCard } from ".";
import previewImages from "../../assets/dbimages/preview";

const RoomPreview = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <PreviewCard
            image={previewImages[0]}
            beds={2}
            price={255}
            name="Test name"
            peoples={4}
          />
          <PreviewCard
            image={previewImages[0]}
            beds={2}
            price={255}
            name="Test name"
            peoples={4}
          />
          <PreviewCard
            image={previewImages[0]}
            beds={2}
            price={255}
            name="Test name"
            peoples={4}
          />
          <PreviewCard
            image={previewImages[0]}
            beds={2}
            price={255}
            name="Test name"
            peoples={4}
          />
        </Grid>
      </Container>
    </section>
  );
};

export default RoomPreview;
