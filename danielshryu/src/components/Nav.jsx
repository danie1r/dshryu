import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <div className="header" style={{display:"flex"}}>
        <div className="navItem">
          <a href="#work">Work Experience</a>
        </div>
        <div className="navItem">
          <a href="#project">Projects</a>
        </div>
        <div className="navItem">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}