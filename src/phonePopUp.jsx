import React, { Component } from "react";
import "./phonePopUp.css";
import youtube from "./images/Youtube.png";
import Popup from "reactjs-popup";
import github from "./images/GitHub.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class PhonePopUp extends Component {
  state = {};
  render() {
    const renderTooltip = (props) => <Tooltip {...props}>View Code</Tooltip>;
    return (
      <Popup
        open={this.props.isOpen}
        modal
        closeOnDocumentClick
        contentStyle={{
          border: this.props.border,
          borderColor: this.props.borderColor,
          background: this.props.background,
          color: this.props.color,
          borderRadius: "10px",
          width: "100%",
        }}
        onClose={this.props.closePopUp}
      >
        <div className="Project-modal">
          <div className="Modal-text">
            <h1>{this.props.name}</h1>

            <span className="Modal-description">{this.props.description}</span>
          </div>
        </div>
        <div
          style={{
            height: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <a
            href={`https://www.youtube.com/watch?v=${this.props.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="Modal-Link"
          >
            <img
              src={youtube}
              alt="Youtube"
              style={{ width: "100%", borderRadius: "29%" }}
            />
          </a>
          <a
            href={this.props.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="Modal-Link"
          >
            <OverlayTrigger placement="right" overlay={renderTooltip}>
              <img src={github} alt="GitHub" style={{ borderRadius: "50%" }} />
            </OverlayTrigger>
          </a>
        </div>
      </Popup>
    );
  }
}

export default PhonePopUp;
