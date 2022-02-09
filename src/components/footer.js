import React from "react"
import { Link } from "gatsby"
import style from "./footer.module.css"

const Footer = ({ }) => (
  <footer className={style.colophon}>
    <a href="https://www.simpledzn.com/" style={{color:"#9e9d9d", fontWeight: "normal"}} rel="noreferrer" target="_blank"> SimpleDzn © {new Date().getFullYear()}</a>
    <Link style={{paddingLeft: "2em", color: "#9e9d9d"}} to="/termsofuse">Terms of Use </Link> 
  </footer>
)

export default Footer
