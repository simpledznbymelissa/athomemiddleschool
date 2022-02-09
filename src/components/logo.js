import React from "react"
import "./navigation.css"
import {Link} from "gatsby"

const Logo = ({data}) => (
  <div>
<Link to="/"><p className="logo">at<span className="darker">home</span><span className="mid">middleschool</span></p>
  </Link>
  </div>
)

export default Logo

