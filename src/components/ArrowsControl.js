import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import { Details } from "./mock_data/name";

//Context API
import NoteContext from "../context/context";



const List = styled(Paper)(({ theme }) => ({
  display: "inlineGrid",
  padding: theme.spacing(1),
  textAlign: "center",
  margin: "8px",

  width: "90px",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  border: "2px solid",
  margin: "8px",

  color: theme.palette.text.secondary,
}));

const SliderN = () => {
  const score = useContext(NoteContext);
  //console.log(score)
  // score.setupTarget()
  return (
    <Grid
      container
      spacing={2}
      item
      direction="column"
      alignItems="center"
      sx={{ marginTop: 3, height: 150 }}
    >
      <Item
        sx={{
          height: 150,
          width: 150,
        }}
      >
        <Carousel
          variant="dark"
          showThumbs={false}
          infiniteLoop
          showIndicators={false}
          width={150}
          useKeyboardArrows
          showStatus={false}
          onChange={(index) => score.setTarget(Details[index])}
        >
          {Details.map((data, key) => {
            return (
              <List key={key} style={{ marginLeft: 30 }}>
                <div className="name" style={{ marginBottom: 2 }}>
                  {data.name}
                </div>
                <div >
                  <img src={data.image} style={{ width: 48 }} alt={data.name} />
                </div>
              </List>
            );
          })}
        </Carousel>
      </Item>
    </Grid>
  );
};

export default SliderN;
