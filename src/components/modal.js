import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="modal">
        {/*<h2>Modal Window</h2>*/}
        <div className="content">{this.props.children}</div>
        <div className="actions">
          {/*<button type="button"  className="toggle-button" onClick={this.onClose}>*/}
            {/*close*/}
          {/*</button>*/}
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
