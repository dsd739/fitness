import React, { Component } from "react";
import "./progressbar.css";

class Progressbar extends Component {
  componentDidMount() {
    this.setStepStatus();
  }

  setStepStatus = () => {
    const steps = document.querySelectorAll(".step");
    let foundActive = false;

    steps.forEach((element) => {
      if (!foundActive && !element.classList.contains("active")) {
        element.classList.add("done");
        element.innerHTML = <i className="icon-ok"></i>;
      }

      if (element.classList.contains("active")) {
        foundActive = true;
      }
    });
  };

  render() {
    return (
      <div>
        <div id="steps">
          <div className="step" data-desc="Listing information">
            1
          </div>
          <div className="step" data-desc="Photos & Details">
            2
          </div>
          <div className="step active" data-desc="Review & Post">
            3
          </div>
          <div className="step" data-desc="Your order">
            4
          </div>
        </div>
      </div>
    );
  }
}

export default Progressbar;
