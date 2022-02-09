import React from "react";
import "./navigation.css"
import {Link} from "gatsby"

class MenuButton extends React.Component {
  render() {
    return (
      <div className="buttonTop">
      <button
        className="navButton"
        onMouseDown={this.props.handleMouseDown}>
        <Link to="/mobilemenu"><p className="icon"/>
        <p className="icon"/></Link>
      </button>
      </div>
    );
  }
}

export default MenuButton;