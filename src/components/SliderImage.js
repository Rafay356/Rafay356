import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { Paper } from "@mui/material";
// import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";


import Slider from "react-slick";
// import { Details } from "./mock_data/ImageDetails";

//Context API
// import NoteContext from "../context/context";



const Item = styled('div')(({ theme }) => ({
  display: "flex",
  // display: "inlineGrid",
  // padding: theme.spacing(1),
  // textAlign: "center",
  // margin: "8px",


}));

const Container = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "400px",

}));
function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";

  const char = props.type === "next" ? "👉" : "👈";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );

}

const SliderN = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const score = useContext(NoteContext);
  //const selectedPerson = useSelector((state) => state.selectedPerson);
  const allPersons = useSelector((state) => state.allPersons);

  const settings = {

    customPaging: function (i) {
      return (
        <a>
          <img src={`${allPersons.image}.jpg`} />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => props.onChange(allPersons[next]),
    // onChange={(index) => props.onChange(allPersons[index])}
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]



  };



  return (
    // <Grid
    //   container
    //   spacing={2}
    //   item
    //   direction="column"
    //   alignItems="center"
    //   sx={{ marginTop: 3, height: 150 }}
    // >
    <Container>

      <Slider {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}


        // onChange={(index) => props.onChange(allPersons[index])}

        style={{
          display: "flex", jsutifyContent: "center", alignItems: "center"
        }}
      // variant="dark"
      // showThumbs={false}
      // infiniteLoop
      // showIndicators={false}
      // width={150}
      // useKeyboardArrows
      // showStatus={false}
      // onChange={(index) => score.setTarget(Details[index])}

      >

        {
          allPersons.map((data, key) => {

            return (

              <Item key={key} >

                {/* <div className="name" style={{ width: 120 }} >
                  {data.name}
                </div> */}
                <div style={{ marginRight: '12px', display: 'flex', justifyContent: 'center', alightItems: 'center', }}>
                  <img src={data.image} style={{ width: "100%", height: '100%', borderRadius: "20px" }} alt={data.name} />
                </div>
              </Item>
            );
          })}
      </Slider >
    </Container >
    // </Grid>
  );
};

export default SliderN;
