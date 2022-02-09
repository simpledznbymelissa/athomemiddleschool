import React from "react"
import "./navigation.css"
import {Link} from "gatsby"

const LogoWhite = ({data}) => (
  <div>
    <Link to="/"><div className="logowhite">at<span className="whiter">home</span><span className="mid">middleschool</span></div>
    </Link>
  </div>
)

export default LogoWhite
