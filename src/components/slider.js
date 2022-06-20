// import React from "react";
// const RenderList = (props) => {
//   const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

//   return (
//     <ul>
//       {animals.map((animal, index) => (
//         <li key={index}>{animal}</li>
//       ))}
//     </ul>
//   );
// };
// export default RenderList;

/* <Container className="SliderImage" sx={{ flexDirection: "row" }}>
      <img
        style={{
          width: 48,
          marginRight: 10,
          marginTop: 5,
        }}
        className="Image1"
        src="./images/shahbaz_sharif_1.jpeg"
        alt="Image1"
      />
      <img
        style={{
          width: 48,
        }}
        src="./images/shahbaz_sharif_1.jpeg"
        alt="Image2"
      />
    </Container>
    
  ); 
}*/

//import Slider from "react-slick";
import React, { useRef, useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
// import CarouselControlsArrowsBasic2 from "./ArrowsControl";
//import { Box, Card, Typography, Container } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Details } from "./mock_data/name";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import App from "../App";
// import mockData from "./mock_data";

// const arr = arr.map(function(currentvalue,index,arr){

// })

// const MOCK_MEMBERS = name.map((item, index) => {
//   console.log("item in array is ", item);
// });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  border: "2px solid",
  margin: "8px",

  color: theme.palette.text.secondary,
}));
const List = styled(Paper)(({ theme }) => ({
  display: "inlineGrid",
  padding: theme.spacing(1),
  textAlign: "center",
  margin: "8px",
  boxShadow: "0px 2px 2px",
}));

// function ImageCard(imagesDetails) {
//   //   console.log("imageDetails from slider", imagesDetails.name);
//   const { name, avatar } = imagesDetails;
//   return <h1>{imagesDetails.name}</h1>;
// }

// function formatName() {
//   // let list = document.getElementsByClassName("List")
//   console.log("function Called");
//   const arr = name.forEach((item) => {
//     console.log("item in foreach", item.name);
//     return <p>{{ item }}</p>;
//   });
// }
// function SpacingGrid() {
//   const arr = name.forEach((list) => {
//     console.log("item in forEach in spacingGrid", list);
//   });
//   return (
//     <Grid
//       container
//       spacing={2}
//       direction="row"
//       justifyContent="space-evenly"
//       alignItems="baseline"
//     ></Grid>
//   );
// }
// const arr = name.map((item) => {
//   console.log("item2", item);
// });

function SliderImage({ setElement }) {
  //   `Item`.slick({
  //     // normal options...
  //     infinite: false,

  //     // the magic
  useEffect(() => {
    console.log(setElement);
  });
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    if (slideIndex !== Details.length) {
      setSlideIndex(slideIndex + 1);
      console.log(slideIndex);
    } else if (slideIndex === Details.length) {
      setSlideIndex(1);
    }
  };

  const handlePrevious = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      console.log(slideIndex);
    } else if (slideIndex === 1) {
      setSlideIndex(Details.length);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      item
      direction="column"
      alignItems="center"
      sx={{ marginTop: 6 }}
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <Item>
        <ArrowCircleLeftIcon onClick={handleNext} />

        {Details.map((data, key) => {
          return (
            <List key={key}>
              <div className="name" style={{ marginBottom: 2 }}>
                {data.name}
              </div>
              <div sx={{ backgroundColor: "red" }}>
                <img src={data.image} style={{ width: 48 }} alt="Logo" />
              </div>
            </List>
          );
        })}
        <ArrowCircleRightIcon onClick={handlePrevious} />
        {/* <Slider>
          {name.map((item, index) => {
            console.log("item", item);
            ImageCard(item);
          })}
        </Slider> */}
        {/* {name.map((item, index) => {
          console.log("item", item);
          <h1 style={{ color: "black", borderColor: "pink" }}>{item.name}</h1>;
        })} */}
        {/* </Carousel> */}
      </Item>
    </Grid>
  );
}

export default SliderImage;
