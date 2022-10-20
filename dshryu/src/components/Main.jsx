import React from "react";
import Introduction from "./Introduction";
import Background from "./Background";
import Work from "./Work";
import Project from "./Project";
import Nav from "./Nav";
export default function Main(){
    return(
        <div>
            <Nav/>
            <Introduction/>
            <Work/>
            <Project/>
            <Background/>
        </div>
    )
}