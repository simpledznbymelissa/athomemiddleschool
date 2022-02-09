import React from "react";
import "./timer.css";
import TimerClock from "../components/timerClock"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Timer20 = ({ data }) => {
  return (
    <Layout>

      <SEO
        title="Math 6th Grade"
        description="20 minute timer"
        image="/logo.png"
        pathname="/time20"

      />
    <div className="countdowncontainer">
    <div id="countdown">
          <TimerClock/>
          <div className="bird-container bird-container--one">
            <div className="bird bird--one"/>
          </div>
          <div className="bird-container bird-container--two">
            <div className="bird bird--two"/>
          </div>
          <div className="bird-container bird-container--three">
            <div className="bird bird--three"/>
          </div>
          <div className="bird-container bird-container--four">
            <div className="bird bird--four"/>
          </div>
        </div>
      </div>
</Layout>
  )
}

export default Timer20