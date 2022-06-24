//React 
import React, { useState, useRef, useContext } from "react";

//CSS and animation
import { Container, Box } from "@mui/system";
import "./App.css";
import { useDrag } from "react-use-gesture";
import { animated } from "react-spring";
import SliderN from "./components/ArrowsControl";

//Context API
import NoteContext from "./context/context";

//Speed Calculation variables
var endDate;
var startDate;


function App() {

  //using Context to accesss Data 
  const score = useContext(NoteContext);
  // console.log(score.state.map((data) => { return Object.values(data.count) }))
  // const num = (index) => {
  //   // score.setTarget(score.state[index])
  //   console.log(index)
  // }

  // const num = score.state.map((data, index) => {
  //   // return data.count
  //   console.log("index", data.count[index])
  // })
  //console.log(score.state[0].count)



  // const [selectedPerson, setSelectedPerson] = useState({
  //   name: "Shahbaz Sharief",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg/220px-CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg",
  //   afterHitAvatar: "./images/shahbaz_sharif_2.png",
  // });


  //const [count, setCount] = useState(0);
  const [LogoPos, setLogoPos] = useState({ x: 0, y: 0 });

  //const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  // const [imageDimensions, setImageDimensions] = useState({
  //   width: 0,
  //   height: 0,
  // });
  // const refContainer = useRef();
  // const [divDimensions, setdivDimensions] = useState({ width: 0, height: 0 });
  const [lastSpeed, setLastSpeed] = useState(0);
  const [hitDetected, setHitDetected] = useState(false);

  const mov = useDrag((params) => {

    const handX = handRef.current.x;
    const handY = handRef.current.y;
    const handWidth = handRef.current.width;
    const handHeight = handRef.current.height;
    const avatarX = avatarRef.current.x;
    const avatarY = avatarRef.current.y;
    const avatarWidth = avatarRef.current.offsetWidth;
    const avatarHeight = avatarRef.current.offsetHeight;

    if (!hitDetected) {

      if (
        // LogoPos.x > avatarRef.current.x - avatarRef.current.width - 50 &&
        avatarX < handX + handWidth &&
        avatarX + avatarWidth > handX &&
        avatarY < handY + handHeight &&
        avatarY + avatarHeight > handY
      ) {


        Colllision();
        //console.log(score.state)

        console.log("Collided.");


        score.update();
        // score.setupTarget()

        // console.log("target", score.target)

        setTimeout(() => {
          setLastSpeed(0);
          setHitDetected(false)
          setLogoPos({ x: 0, y: 0 });
        }, 3000);
      } else {
        console.log("No collided yet");
        // startDate = new Date();

        setLogoPos({

          x: params.movement[0],
          y: params.movement[1],
        })

      }

    }

  });



  function calculateSpeed() {
    score.update()
    var a = LogoPos.x - avatarRef.current.x;
    var b = LogoPos.y - avatarRef.current.y;

    endDate = new Date();

    console.log("X1: ", LogoPos.x, "X2: ", avatarRef.current.x);

    console.log("A: ", a, "B: ", b);

    var c = Math.sqrt(a * a + b * b);

    console.log("Distance: ", c);

    console.log("TIME DIFF: ", endDate.getTime() - startDate.getTime() / 1000);

    let speed = c / (endDate.getTime() - startDate.getTime());
    setLastSpeed(speed.toFixed(2));
    console.log("speed", score.setTarget(speed));


  }
  // const collision = () => {
  //   if (targetRef.current.x + targetRef.current.width > refTarget.current.x) {
  //     console.log("audio play");
  //     audio.play();
  //   } else {
  //     return;
  //   }
  // };

  const audio = new Audio("./audio/slap.mp3");

  // const start = () => {
  //   audio.play();
  // };

  // const [Image, setImage] = useState({ image: "./images/handFinal.png" });
  // function handleImage() {
  //   setImage({
  //     Image: " ./images/hand2Final.png",
  //   });
  // }
  // const onLayout = (event) => {
  //   console.log("Layout");
  //   const { x, y, height, width } = event;
  //   console.log("Dimensions of contatiner vieew: ", x, y, height, width);
  // };
  const avatarRef = useRef();
  const handRef = useRef();
  startDate = new Date();
  // useLayoutEffect(() => {

  function Colllision() {
    calculateSpeed();
    // useDrag((params) => {
    //   setLogoPos({
    //     x: params.movement[0],
    //     y: params.movement[1]
    //   })
    // })

    // setLastSpeed(speed);
    //dragging = false;
    console.log("Collision Detected");
    audio.play();
    setHitDetected(true);

    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 3000);

    // Wait for 3 seconds, Call ResetPage
    //window.location.reload(false);
  }
  // });
  return (
    <>
      <Container className="App" sx={{ height: 600 }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          > */}
          <h1>
            {lastSpeed} Km/h
          </h1>
          <h3>Score : {score.target.count} </h3>

          {/* </Box> */}
        </Container>
        {/* //<Speed /> */}
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "auto",
            height: 300,
          }}
        >
          <animated.div
            {...mov()}
            style={{
              position: "relative",
              left: LogoPos.x,
              top: LogoPos.y,
              width: 48,
              height: 48,
              zIndex: 1,
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="./images/handFinal_2.png"
              className="App-logo"
              alt="logo"
              ref={handRef}

            // onClick={start}
            />
          </animated.div>
          {/* <button onClick={start}>Play</button> */}
          <Box
            style={{
              width: 100,
              height: 100
            }}

          // onLayout={onLayout}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={
                hitDetected
                  ? score.target.afterHitAvatar
                  : score.target.image
              }
              className="App-logo2"
              alt={score.target.name}
              ref={avatarRef}
            // ele={element}
            />
          </Box>
        </Container>
        <SliderN />
      </Container>
    </>
  );
}

export default App;
