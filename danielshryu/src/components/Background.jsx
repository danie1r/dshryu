import React from "react";
import Topology from "../assets/topology.png";
import Overlay from "../assets/overlay.png";
import "./Background.css";

export default function Background() {

  const changeBackground = () => {
    var temp = (window.scrollY/1000 * 100).toFixed(0);
    if(temp > 90){
        temp = 90;
    }
    var tempString = temp.toString() + "%";
    document.getElementsByClassName("backgroundOverlay")[0].style.opacity =
        tempString;
    
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="container">
      <img
        src={Overlay}
        alt="background"
        width={"100%"}
        className="backgroundOverlay"
      />
      <img
        src={Topology}
        alt="background"
        width={"100%"}
        className="backgroundImage"
        style={
          {
            //   zIndex: "1",
            //   position: "fixed",
            //   right: "0",
            //   left: "0",
            //   top: "550px",
            //   height: "400px",
          }
        }
      />
    </div>
  );
}
