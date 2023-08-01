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
function NextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {

  const style = {
    // backgroundColor: 'black',

  }
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}
// function Arrow(props) {
//   let className = props.type === "next" ? "nextArrow" : "prevArrow";

//   const char = props.type === "next" ? "👉" : "👈";
//   return (
//     <span className={className} onClick={props.onClick} >
//       {char}
//     </span>
//   );

// }

const SliderN = (props) => {
  // const score = useContext(NoteContext);
  //const selectedPerson = useSelector((state) => state.selectedPerson);
  const allPersons = useSelector((state) => state.allPersons);

  const settings = {

    // customPaging: function (i) {

    //   return (

    //     <img src={`${allPersons.image}/images.jpg`} />


    //   );
    // },

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => props.onChange(allPersons[next]),
    // onChange={(index) => props.onChange(allPersons[index])}
  };



  return (

    <Container>

      <Slider {...settings}
        style={{
          display: "flex", jsutifyContent: "center", alignItems: "center",
        }}

      >

        {
          allPersons.map((data, key) => {

            return (

              <Item key={key} >
                <div style={{ marginLeft: '12px', marginRight: '12px', display: 'flex', justifyContent: 'center', alightItems: 'center' }}>
                  <img src={data.image} style={{ width: "100%", height: '100%', borderRadius: "20px" }} alt={data.name} />
                </div>
              </Item>
            );
          })}
      </Slider >
    </Container >
  );
};

export default SliderN;
