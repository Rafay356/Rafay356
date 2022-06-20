import "./App.css";
import { Container, Box } from "@mui/system";
import React, { useState, useRef } from "react";
import { useDrag } from "react-use-gesture";
// import { useSprings, animated, interpolate } from "react-spring";
//import { useSpring } from "@use-gesture/react";
import { animated } from "react-spring";
//import SliderImage from "./components/slider";
import SliderN from "./components/ArrowsControl";

var endDate;
var startDate;
function App() {
  const [selectedPerson, setSelectedPerson] = useState({
    name: "Shahbaz Sharief",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg/220px-CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg",
    afterHitAvatar: "./images/shahbaz_sharif_2.png",
  });
  const [count, setCount] = useState(0);
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
  // useEffect(() => {
  //   setLastSpeed({});

  // });

  // useEffect(() => {
  //   setdivDimensions({
  //     width: refContainer.current.offsetWidth,
  //     height: refContainer.current.offsetheight,
  //   });
  //   console.log(
  //     "divdimensionWidth",
  //     refContainer.current.offsetWidth,
  //     "divdimensionHeight",
  //     refContainer.current.offsetHeight
  //   );
  // }, []);

  // useEffect(() => {
  //   console.log("Selected person changed! ", selectedPerson);
  // }, [selectedPerson].id);
  //  console.log("divdimension", refContainer.current.width);
  // const bind = useDrag(({ active, movement: [mx], cancel }) => {
  //   if (mx > 200) cancel()

  // const bind = useDrag(
  //   (api, { down, offset: [ox] }) =>
  //     api.start({
  //       imagePosition: down ? ox : 0,
  //       config: { duration: 3000 },
  //     }),
  //   { from: () => [imagePosition.get(), 0] }
  // );
  //return <animated.div {...bind()} style={{ x }} />
  const mov = useDrag((params) => {
    console.log(params);
    if (LogoPos.x > avatarRef.current.x - avatarRef.current.width - 50) {
      console.log("Collided.");
      console.log(params.initial);
      setTimeout((event) => {
        setLogoPos({
          x: (event.clientX = 0),
          y: (event.clientY = 0),
        });

        setLastSpeed(0);

        // lastSpeed.reset();
        //3. Update Count.

        //4. Reset hitDetected Flag
        setHitDetected(true);
      }, 3000);
    } else {
      console.log("No collided yet");
      // startDate = new Date();
      Colllision();
      setLogoPos({
        x: params.offset[0],
        y: params.offset[1],
      });
    }
  });
  console.log("mov Function", mov());

  // useEffect(() => {
  //   setImagePosition({ x: avatarRef.current.x, y: avatarRef.current.y });
  //   setImageDimensions({
  //     width: avatarRef.current.width,
  //     height: avatarRef.current.height,
  //   });

  //   // console.log(
  //   //   "avatarWIdth",
  //   //   avatarRef.current.width,
  //   //   "avatarHeight",
  //   //   avatarRef.current.height,
  //   //   "avatarX",
  //   //   avatarRef.current.x,
  //   //   "avatarY",
  //   //   avatarRef.current.y
  //   // );
  // }, []);

  // function resetPage() {
  //   /*Todos: */
  //   //1. Set hands initial position.
  //   //2. Reset Speed.

  //   setLogoPos({ x: 0, y: 0 });
  //   setLastSpeed(0);

  //   // lastSpeed.reset();
  //   //3. Update Count.

  //   //4. Reset hitDetected Flag
  //   setHitDetected(true);
  // }

  // const styles = useSpring({
  //   loop: true,
  //   from: { rotateZ: 0 },
  //   to: { rotateZ: 180 },
  // });

  function calculateSpeed() {
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
    //console.log("speed", (speed / 300).toFixed(0));

    console.log("Speed: ", speed);
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
        avatarX < handX + handWidth &&
        avatarX + avatarWidth > handX &&
        avatarY < handY + handHeight &&
        avatarY + avatarHeight > handY
      ) {
        calculateSpeed();
        // setLastSpeed(speed);
        //dragging = false;
        console.log("Collision Detected");
        audio.play();
        setHitDetected(true);
        setCount(count + 1);
        //setSelectedPerson({ image: selectedPerson.image });
        // setTimeout(() => {
        //   window.location.reload(false);
        // }, 3000);

        // Wait for 3 seconds, Call ResetPage
        //window.location.reload(false);
      }
    }

    console.log(
      "handX",
      handX,
      "handY",
      handY,
      "handWidth",
      handWidth,
      "handHeight",
      handHeight
    );
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
          <h1>{lastSpeed} Km/h</h1>
          <h3>Score : {count} </h3>
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
              top: LogoPos.y,
              left: LogoPos.x,

              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "red",

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
              height: 100,

              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "red",
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
                  ? selectedPerson.afterHitAvatar
                  : selectedPerson.image
              }
              className="App-logo2"
              alt={selectedPerson.name}
              ref={avatarRef}
              // ele={element}
            />

            {/* <RenderList /> */}
          </Box>
        </Container>
        <SliderN setElement={setSelectedPerson} />
        {/* <SliderImage /> */}
      </Container>
    </>
  );
}

export default App;
