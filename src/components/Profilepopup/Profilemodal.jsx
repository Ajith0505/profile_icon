import React from "react";
import "./styles.css"


function Profilemodal() {
    
    return (
      <div className="profile-modal">
       <div className="profile-image"><img className="profile-image-icon" src="images\profile@3x.png" alt="profile-image" /></div>
       <div className="profile-image"><span className="profile-name">Hyder Marakkar</span></div>
       <div className="profile-image"><span className="profile-gmail">hyder.marakkar@gmail.com</span></div>
       <div className="profile-btn"><button className="button-editprofile"><span className="edit-profile">Edit Profile</span></button></div>
       <div className="profile-category"></div>
       <div className="profile-category"></div>
       <div className="profile-category"></div>
       <div className="profile-category"></div>
      </div>
    );
  }
  
  export default Profilemodal;
  