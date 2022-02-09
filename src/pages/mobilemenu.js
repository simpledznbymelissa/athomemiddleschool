import React from "react"
import { Link } from "gatsby"
import "../components/navigation.css"

// import { Link } from "react-router-dom";

const MobileMenu = ({ data }) => {

  const mobileLink = {
    color: "white",
    fontWeight: "normal",
    lineHeight: "2em",
    fontSize: ".8em"
  }

  return (
    <div className="gradanimate full">
      <ul className="mobileList" data-sal="slide-up"
          data-sal-duration="1200" data-sal-easing="ease">
        <li><Link style={mobileLink} to="/">home</Link></li>
        <li><Link style={mobileLink} to="/resources">resources</Link></li>
        <li><Link style={mobileLink} to="/about">about</Link></li>
        <li><Link style={mobileLink} to="/sixth">6th</Link></li>
        <li><Link style={mobileLink} to="/seventh">7th</Link></li>
        <li><Link style={mobileLink} to="/eighth">8th</Link></li>
        <li><Link style={{color: "transparent"}} to="/"> Go back </Link></li>
      </ul>
    </div>
  )
}

export default MobileMenu