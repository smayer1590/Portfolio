import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import github from "./images/GitHub.png";
import linkedIn from "./images/LinkedIn.png";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    const renderTooltip = (props, name) => <Tooltip {...props}>{name}</Tooltip>;
    return (
      <div>
        <a
          href="https://github.com/smayer1590"
          target="_blank"
          rel="noopener noreferrer"
        >
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip(this.props, "GitHub")}
          >
            <img
              className="Icon"
              style={{ borderRadius: "50%" }}
              src={github}
              alt="github"
            />
          </OverlayTrigger>
        </a>
        <a
          className="Icon"
          href="https://www.linkedin.com/in/sanae-mayer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip(this.props, "LinkedIn")}
          >
            <img className="Icon" src={linkedIn} alt="linkedIn" />
          </OverlayTrigger>
        </a>
      </div>
    );
  }
}

export default Footer;
