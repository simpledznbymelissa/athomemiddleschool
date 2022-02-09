import React from "react"
import MenuButton from "./menubutton"
import "./navigation.css"
import { Link } from "gatsby"

export default class Navi extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleMouseDown(e) {
    this.toggleMenu()
    console.log("clicked", this.state.show)
    e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <>
        <nav className="navWrapper">
          <div className="navListwrapper">
            <a className="logo" href="/"><span
              className="mid">at</span><span className="darker">home</span><span
              className="mid">middleschool</span></a>
            <ul className="navList">
              <li className="navItem">
                <a className="navLink" href="/">
                  home
                </a>
              </li>

              <li className="navItem">
                <Link to="/resources" className="navLink">
                  resources
                </Link>
              </li>
              
              <li className="navItem">
                <Link to="/about" className="navLink">
                  about
                </Link>
              </li>

              <li className="navItem">
                <Link to="/sixth" className="navLink">
                  6th
                </Link>
              </li>

              <li className="navItem">
                <Link to="/seventh" className="navLink">
                  7th
                </Link>
              </li>

              <li className="navItem">
                <Link to="/eighth" className="navLink">
                  8th
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="mobileMenu">
            <MenuButton handleMouseDown={this.handleMouseDown}/>
            {/*<MobileMenu*/}
            {/*handleMouseDown={this.handleMouseDown}*/}
            {/*menuVisibility={this.state.show}*/}
            {/*/>*/}
          </div>
        </nav>
      </>
    )
  }
}