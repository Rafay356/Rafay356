import React, { useState } from "react";
import NoteContext from "./context";
//import { Details } from "../components/mock_data/name"
const NoteState = (props) => {


    const [target, setTarget] = useState({
        name: "Shahbaz Sharief",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg/220px-CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg",
        afterHitAvatar: "./images/shahbaz_sharif_2.png",
        count: 0,
        maxSpeed: 0
    });

    // console.log(target)

    const update = () => {
        setTarget({ ...target, count: target.count + 1 })
        //console.log(...state)

    }

    return (
        <NoteContext.Provider value={{ setTarget, update, target }}>{props.children}</NoteContext.Provider>
    );
};

export default NoteState;
