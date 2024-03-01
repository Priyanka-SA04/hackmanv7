import React from "react";
import "../Css/About.css"

function About() {
  return (
    <div id="about" className="custom-height-abt about-con custom-abt-bg">
      <div className="abt-container logo">
        <div className="text-center">
          <h1 id="about" style={{fontFamily:"karmatic"}}>ABOUT</h1>
          <h1
            className="heading pt-5"
            style={{ letterSpacing: "0.5px" }}
          >
            HACKMAN V7
          </h1>
          <h4
            className="dates pb-4"
            // style={{ color: "black", letterSpacing: "1px" }}
          >
            Date : June 24th - 25th
          </h4>
          <div className="content-box container-md container-sm abt-box">
              <p className="p-3 small-text" style={{color: "black", letterSpacing:"0.5px", wordSpacing:"1px"}}>
              HackMan v.7 is an Inter College, extravagant 24-hour Hackathon,
              hosted by the Department of ISE, Dayananda Sagar College of
              Engineering (DSCE), Bangalore. We give the brightest of minds a
              chance to brainstorm as a team and come up with unique solutions,
              code it out and solve some of the pressing problems of our
              society. Over the first 4 versions we have seen some brilliant
              projects and we challenge you to top them off with your
              Out-of-the-box ideas. “You can't solve a problem on the same level
              that it was created. You have to rise above it to the next level.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
