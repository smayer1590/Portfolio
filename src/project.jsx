import React, { Component } from "react";
import "./project.css";
import "reactjs-popup/dist/index.css";

import DesktopPopUp from "./desktopPopUp";
import PhonePopUp from "./phonePopUp";
class Project extends Component {
  state = {
    isOpen: false,
    phoneWidth: 727,
  };

  closePopUp = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div className="Project">
        <button
          className="Project-container"
          style={{
            background: this.props.background,
            border: this.props.border,
            borderColor: this.props.borderColor,
          }}
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          <img
            className="Project-image"
            src={this.props.image}
            alt={this.props.alt}
          />
        </button>
        <div style={{ height: "90%" }}>
          {window.innerWidth > this.state.phoneWidth && (
            <DesktopPopUp
              name={this.props.name}
              link={this.props.link}
              group={this.props.group}
              technology={this.props.technology}
              description={this.props.description}
              type={this.props.type}
              closePopUp={this.closePopUp}
              color={this.props.color}
              background={this.props.background}
              isOpen={this.state.isOpen}
              github={this.props.github}
              gitLink={this.props.gitLink}
            />
          )}
          {window.innerWidth <= this.state.phoneWidth && (
            <PhonePopUp
              name={this.props.name}
              link={this.props.link}
              group={this.props.group}
              technology={this.props.technology}
              description={this.props.description}
              type={this.props.type}
              closePopUp={this.closePopUp}
              color={this.props.color}
              background={this.props.background}
              isOpen={this.state.isOpen}
              github={this.props.github}
              gitLink={this.props.gitLink}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Project;
