import React from "react";
import Collapsible from "react-collapsible";
import "./Project.css";
export default function Project() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        marginLeft: "50%",
        width: "50%",
        marginTop: "20%",
      }}
      id="project"
    >
      <h1>Projects</h1>
      <Collapsible
        triggerStyle={{
          borderBottom: "solid",
          fontSize: "30px",
          lineHeight: "100px",
        }}
        triggerTagName = "menuName"
        trigger="Pepper Inc. - Polygon dApp"
      >
        <ul>
          <li>
            Leading a group of developers, and designers in creating an NFT
            collection business that recently launched in October.
          </li>
          <li>
            Deployed smart contract for the NFT marketplace dApp and NFT token
            on the Polygon chain and conducted deploy tests and migrations for
            the smart contract.
          </li>
          <li>Designed and developed the NFT collection website.</li>
        </ul>

        <div className="links">
          <p>links: </p>
          <a href="https://opensea.io/collection/peppermotors-peppi">opensea</a>
          <a href="https://www.peppermotor.com">website</a>
        </div>

        <div>
          <h2 className="skills">Skills Used:</h2>
          <p>
            Solidity | Ethereum Virtual Machine API | OpenZeppelin | Typescript
            | Truffle | JavaScript | AWS | React.js | HTML | CSS
          </p>
        </div>
      </Collapsible>
      <Collapsible
        triggerStyle={{
          borderBottom: "solid",
          fontSize: "30px",
          lineHeight: "100px",
        }}
        trigger=" Poke-Chat - Game Dev."
      >
        <ul>
          <li>
            Collaborated with another developer to create a game/chat room web
            application in which we recreated the Pokémon game and added a chat
            room feature that allows players to walk into a “chat-house” and
            chat with other players that are currently in the same room.
          </li>
        </ul>

        <div className="links">
          <p>links: </p>
          <a href="https://github.com/danie1r/Poke-Chat">github</a>
        </div>

        <div>
          <h2 className="skills">Skills Used:</h2>
          <p>
            React.js | MongoDB | SQL | Socket.io | React Bootstrap | React Redux
            | Node.js | Unity
          </p>
        </div>
      </Collapsible>
      <Collapsible
        triggerStyle={{
          borderBottom: "solid",
          fontSize: "30px",
          lineHeight: "100px",
        }}
        trigger="Sketch Up - Mobile Application"
      >
        <ul>
          <li>
            Developed a sketch iOS mobile application. Users are able to sketch
            from scratch or import an image and add sketches.
          </li>
        </ul>

        <div className="links">
          <p>links: </p>
          <a href="https://github.com/danie1r/Drawing-App">
            github
          </a>
        </div>

        <div>
          <h2 className="skills">Skills Used:</h2>
          <p>
            Swift | SwiftUI | Xcode
          </p>
        </div>
      </Collapsible>
    </div>
  );
}
