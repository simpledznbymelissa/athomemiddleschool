import React from "react";
import MenuButton from "./menubutton";
import "./navigation.css"
import {Link} from "gatsby"

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log("clicked", this.state.show);
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <nav className="navWrapper">
          <Link to="/"> <p className="logowhite">at<span className="lighterwhite">home</span><span className="mid">middleschool</span></p></Link>
          <div className="navListwrapper">
            <ul style={{marginTop: 0, display: 'flex', justifyContent: 'flex-end', maxHeight: '1000px'}}>
              <li className="navItem">
                <a className="navLinkWhite" href="/">
                  home
                </a>
              </li>

              <li className="navItem">
                <a className="navLinkWhite" href="/about">
                  about
                </a>
              </li>

              <li className="navItem">
                <a className="navLinkWhite" href="/cassatt">
                  contact
                </a>
              </li>

              <li className="navItem">
                <a className="navLinkWhite" href="/vangogh">
                  other
                </a>
              </li>
            </ul>
          </div>
          <div className="mobileMenu">
            <MenuButton handleMouseDown={this.handleMouseDown} />
            {/*<MobileMenu*/}
            {/*handleMouseDown={this.handleMouseDown}*/}
            {/*menuVisibility={this.state.show}*/}
            {/*/>*/}
          </div>
        </nav>
      </div>
    );
  }
}