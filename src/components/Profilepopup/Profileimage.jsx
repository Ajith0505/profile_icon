import React from "react";
import Profilemodal from "./Profilemodal";


function Profileimage (props) {
  return (
    <>
    <img src="images/profile.png" alt="not3" />
    {props.isClicked && (<Profilemodal />)}
    </>
  );
}

export default Profileimage;
