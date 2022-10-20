import React from "react";
import Collapsible from "react-collapsible";
import "./Work.css";
export default function Work() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        marginLeft: "20%",
        width:"55%"
      }}
      id="work"
    >
      <h1>Work Experience</h1>
      <Collapsible
        triggerStyle={{
          borderBottom: "solid",
          fontSize: "30px",
          lineHeight: "100px",
        }}
        trigger="Washington University in St.Louis - Research Software Engineer"
      >
        <div><p style={{fontSize: "15px", fontStyle: "italic", lineHeight: "0"}}>09.2022 - current</p></div>
        <ul>
          <li>
            Created a health application on wearable technology device that
            permits creating a profile of functional status of a patient before
            and after a medical intervention.
          </li>
          <li>
            Constructed data pipeline for the Apple Healthkit data and developed
            an EDC application to allow site coordinators to enroll subjects
            into the study.
          </li>
        </ul>

        <div>
          <h2 className="skills">Skills Used:</h2>
          <p>
            Swift | SQL | PostgreSQL | AWS | Node.js | JavaScript | Java |
            React.js | HTML | CSS
          </p>
        </div>
      </Collapsible>
      <Collapsible
        triggerStyle={{
          borderBottom: "solid",
          fontSize: "30px",
          lineHeight: "100px",
        }}
        trigger=" Object Computing Inc. - Software Engineer Intern"
      >
        <div><p style={{fontSize: "15px", fontStyle: "italic", lineHeight: "0"}}>06.2022 - 08.2022</p></div>
        <ul>
          <li>
            Developed a new onboarding web application for Object Computing’s
            open-source check-ins software.
          </li>
          <li>
            Improved the onboarding experience for new hires and HR managers by
            streamlining the whole onboarding process, and allowing HR managers
            to track new hires’ onboarding progress in real-time.
          </li>
        </ul>

        <div className="links">
          <p>links: </p>
          <a href="https://github.com/objectcomputing/check-ins">github</a>
        </div>

        <div>
          <h2 className="skills">Skills Used:</h2>
          <p>
            React.js | Material UI | PostgreSQL | RESTful APIs | Java |
            Micronaut | SQL | Axios
          </p>
        </div>
      </Collapsible>
      <Collapsible
        triggerStyle={{
          borderBottom: "solid",
          fontSize: "30px",
          lineHeight: "100px",
        }}
        trigger=" Onnuri iKorea - Software Engineer"
      >
        <div><p style={{fontSize: "15px", fontStyle: "italic", lineHeight: "0"}}>06.2019 - 01.2020</p></div>
        <ul>
          <li>
            Assisted the company with data-driven strategies and helped reach
            over $280,000 in monthly sales within three months.
          </li>
          <li>
            Developed Web Scraping and data automation tools to optimize
            marketing strategies and website design.
          </li>
        </ul>

        <div className="links">
          <p>links: </p>
          <a href="https://github.com/danie1r/Onnuri-iKorea-WebCrawler">github</a>
        </div>
        
        <div>
          <h2 className="skills">Skills Used:</h2>
          <p>
            Python | Selenium WebDriver | BeautifulSoup | NumPy | Plotly |
            Google Analytics
          </p>
        </div>
      </Collapsible>
    </div>
  );
}
