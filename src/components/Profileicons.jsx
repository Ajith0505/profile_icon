import React from "react";
import Profileimage from "./Profilepopup/Profileimage";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Profileicons() {

    const [isIconClicked,setisIconClicked] = useState(false);
    
    const profileModal=() => {
        setisIconClicked(true);
    }
    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) =>{
            if (!menuRef.current.contains(event.target)){
                setisIconClicked(false);
            }
        };

        document.addEventListener("mousedown",handler);
        
        return () => {
            document.removeEventListener("mousedown",handler);
        };
    });
    
    return (
   <div className="login-icons"> <img src="images/notification.svg" alt="not-img" /> <img src="images/notification-bell.svg" alt="notimg2" /> <button ref={(menuRef)} className="profile-button" onClick={profileModal}><Profileimage isClicked={isIconClicked} /></button> </div>
  );
  }
  
  export default Profileicons;  
  