import React, { useState, useEffect } from "react";
import Hand from "../assets/hello.png";

import "./Introduction.css";
const words = [
  "Full-Stack Developer",
  "Smart Contract Developer",
  "UI/UX Developer",
  "Software Engineer",
];

export default function Introduction() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      setReverse(true);
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div id="container">
      <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
        <div id="name">
          <h1>Hello <img className="wave" src={Hand} alt="hello" width={"50px"}/>, my name is Daniel</h1>
          <div style={{marginTop:"33px"}}>
            <h1>&nbsp;Seung Hyeon Ryu</h1>
            <p style={{lineHeight: "0"}}>
              <span style={{ marginLeft: "15px", marginRight: "15px" }}>s-uh-ng</span>{" "}
              <span style={{ marginLeft: "25px" }}>h-ee-uh-n</span>{" "}
              <span style={{ marginLeft: "30px" }}>r-ee-u</span>
            </p>
          </div>
        </div>

        <h2 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          I am a &nbsp;<span style={{color:"skyblue"}}>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
        </h2>
      </div>
    </div>
  );
}
