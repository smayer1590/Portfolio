import React, { Component } from "react";
import "./desktopPopUp.css";

import Popup from "reactjs-popup";
import github from "./images/GitHub.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class DesktopPopUp extends Component {
  state = {};
  render() {
    const renderTooltip = (props) => <Tooltip {...props}>View Code</Tooltip>;
    return (
      <Popup
        open={this.props.isOpen}
        modal
        closeOnDocumentClick
        contentStyle={{
          border: "none",
          background: this.props.background,
          color: this.props.color,
          borderRadius: "10px",
          width: "75%",
          height: "90%",
        }}
        onClose={this.props.closePopUp}
      >
        {this.props.type === "desktop" && (
          <div className="Project-desktop-modal">
            <button
              style={{
                borderRadius: "6px",
                backgroundColor: this.props.color,
                color: this.props.background,
                border: "none",
              }}
              className="Modal-close-button"
              onClick={this.props.closePopUp}
            >
              <strong>X</strong>
            </button>

            <div className="Modal-desktop-text">
              <span className="Title">{this.props.name}</span>
              <span>
                <strong>Technology:</strong>
                <br />
                <br />
                {this.props.technology}
              </span>
            </div>
            <iframe
              className="Modal-desktop-video"
              src={`https://www.youtube.com/embed/${this.props.link}`}
              title={this.props.name}
              allowFullScreen
            />
            <span className="Modal-desktop-description">
              <strong>Description:</strong>
              <br />
              <br />
              {this.props.description}
            </span>
          </div>
        )}
        {this.props.type === "phone" && (
          <div className="Project-phone-modal">
            <button
              style={{
                borderRadius: "6px",
                backgroundColor: this.props.color,
                color: this.props.background,
                border: "none",
              }}
              className="Modal-close-button"
              onClick={this.props.closePopUp}
            >
              <strong>X</strong>
            </button>
            <div className="Modal-phone-text">
              <span className="Title">{this.props.name}</span>
              <span>
                <strong>Technology:</strong>
                <br />
                <br />
                {this.props.technology}
              </span>

              <span className="Modal-phone-description">
                <strong>Description:</strong>
                <br />
                <br />
                {this.props.description}
              </span>
            </div>
            <iframe
              className="Modal-phone-video"
              src={`https://www.youtube.com/embed/${this.props.link}`}
              title={this.props.name}
              allowFullScreen
            />
          </div>
        )}
        <div style={{ height: "10%", textAlign: "Center" }}>
          <a
            style={{
              border: "none",
              marginLeft: "5%",
              alignSelf: "center",
              height: "100%",
            }}
            href={this.props.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            disabled
          >
            <OverlayTrigger placement="right" overlay={renderTooltip}>
              <img
                src={github}
                alt="GitHub"
                style={{ marginTop: "3%", height: "50%", borderRadius: "50%" }}
              />
            </OverlayTrigger>
          </a>
        </div>
      </Popup>
    );
  }
}

export default DesktopPopUp;
