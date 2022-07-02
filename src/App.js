//React 
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from "./store/ReduxMain"
//CSS and animation
import { Container, Box } from "@mui/system";
import "./App.css";
import { useDrag } from "react-use-gesture";
import { animated } from "react-spring";
import SliderN from "./components/SliderImage";
//import { Details } from "./components/mock_data/ImageDetails"


//Context API
//import NoteContext from "./context/context";

//Speed Calculation variables
var endDate;
var startDate;


function App() {

  const playStartingAudio = () => {

  }

  useEffect(() => {
    playStartingAudio();
  }, []);

  const count = useSelector((state) => state.selectedPerson.count)
  // console.log("Seklectedcount,", count)
  const selectedPerson = useSelector((state) => state.selectedPerson);
  const allPersons = useSelector((state) => state.allPersons);
  // console.log("selectedPerson, ", selectedPerson);

  // console.log("actions,", actions)
  const dispatch = useDispatch()
  // console.log("dispatch", dispatch)
  const increment = () => {

    dispatch(actions.increment())

  }

  const setPerson = (person) => {

    dispatch(actions.setPerson(person))
  }
  // console.log("setPerson", setPerson)
  //console.log("increment", increment)

  // const person = { name: "Rafay", adress: { city: "Sialkot" } }
  // const practise = { ...person, name: "Abdul", adress: { ...person.adress, city: "Islambad" } }
  // console.log("person", person)
  // console.log("practise", practise)

  //using Context to accesss Data 
  // const score = useContext(NoteContext);

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

        avatarX < handX + handWidth &&
        avatarX + avatarWidth > handX &&
        avatarY < handY + handHeight &&
        avatarY + avatarHeight > handY
      ) {


        Colllision();

        console.log("Collided.");

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


    var a = LogoPos.x - avatarRef.current.x;
    var b = LogoPos.y - avatarRef.current.y;

    endDate = new Date();

    console.log("X1: ", LogoPos.x, "X2: ", avatarRef.current.x);

    console.log("A: ", a, "B: ", b);

    var c = Math.sqrt(a * a + b * b);

    console.log("Distance: ", c);

    console.log("TIME DIFF: ", endDate.getTime() - startDate.getTime());
    console.log(endDate.getTime(), "endDate of the objectS, ", "start date of the obkect", startDate.getTime())
    const timeDiff = endDate.getTime() - startDate.getTime()
    let speed = c / timeDiff
    setLastSpeed(speed.toFixed(2));
    console.log("speed");


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


  const avatarRef = useRef();
  const handRef = useRef();
  startDate = new Date();
  // useLayoutEffect(() => {

  function Colllision() {
    setHitDetected(true);
    calculateSpeed();
    increment()
    console.log("Collision Detected");
    audio.play();

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
          <h1>
            {lastSpeed} Km/h
          </h1>
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
                borderRadius: "20%"
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
          </Box>
        </Container>
        <SliderN onChange={setPerson} />
      </Container>
    </>
  );
}

export default App;
