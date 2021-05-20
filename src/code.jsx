import React, { Component } from "react";
import "./code.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import python from "./images/Python.png";
import c from "./images/C.png";
import c_sharp from "./images/C_sharp.png";
import javascript from "./images/Javascript.png";
import react from "./images/React.png";
import django from "./images/Django.png";
import sql from "./images/SQL.png";
import sqlite from "./images/SQLite.png";
import postgresql from "./images/PostgreSQL.png";
import firebase from "./images/Firebase.png";
import androidStudio from "./images/AndroidStudio.png";
import jde from "./images/JDE.png";

class Code extends Component {
  state = {};

  render() {
    const renderTooltip = (props, name) => <Tooltip {...props}>{name}</Tooltip>;

    return (
      <div className="Code">
        <strong className="Code-title">Skills</strong>
        <div className="Code-top">
          <div className="Code-inside">
            <p>
              <strong>Front-End</strong>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "React")}
              >
                <img src={react} alt="react" />
              </OverlayTrigger>
            </p>
          </div>
          <div className="Code-inside">
            <p>
              <strong>Back-End / Database</strong>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "Django")}
              >
                <img src={django} alt="django" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "SQL")}
              >
                <img src={sql} alt="sql" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "SQLite")}
              >
                <img src={sqlite} alt="sqlite" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "PostgreSQL")}
              >
                <img src={postgresql} alt="postgresql" />
              </OverlayTrigger>
            </p>
          </div>
          <div className="Code-inside">
            <p>
              <strong>Programmic Language</strong>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "Python")}
              >
                <img src={python} alt="python" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "C / C++")}
              >
                <img src={c} alt="c" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "C#")}
              >
                <img src={c_sharp} alt="c_sharp" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "JavaScript")}
              >
                <img src={javascript} alt="javascript" />
              </OverlayTrigger>
            </p>
          </div>
          <div className="Code-inside">
            <p>
              <strong>Technology / Cloud</strong>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "Firebase Cloud")}
              >
                <img src={firebase} alt="firebase" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "Android Studio")}
              >
                <img src={androidStudio} alt="androidStudio" />
              </OverlayTrigger>
            </p>
            <p>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(this.props, "Oracle JDE Enterprise One")}
              >
                <img src={jde} alt="jde" />
              </OverlayTrigger>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Code;
