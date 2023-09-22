import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
// import { Button } from 'react-bootstrap';
// import insta from '../Style_components/Instagram-Logo.wine.svg'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const Side_menu = ({ show, click }) => {
  const [active, setactive] = useState("");

  useLayoutEffect(() => {
    const ctx1 = gsap.context(() => {
      gsap.to(".options", {
        left: "0%",
        duration: 1,
      });
    });
    return () => ctx1.revert();
  });

  return (
    <div className={show ? "side_menu" : "side_menu hide"}>
      <div className="ram"></div>
      <div className="options">
        <div className="section1">
          <div className="cross" onClick={click}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
          </div>
          <ul>
            <li
              className={active === "dash" ? "active" : ""}
              onClick={() => setactive("dash")}
            >
              DASHBOARD
            </li>
            <li
              className={active === "road" ? "active" : ""}
              onClick={() => setactive("road")}
            >
              ROADMAP
            </li>
            <li
              className={active === "level" ? "active" : ""}
              onClick={() => setactive("level")}
            >
              LEVEL UP
            </li>

            <li
              className={active === "feeds" ? "active" : ""}
              onClick={() => setactive("feeds")}
            >
              FEEDS
            </li>
          </ul>
        </div>
        <div className="section2">
          <div className="reach">
            <h5>Reach out to us</h5>
            <div className="button">
              <button>LinkedIn</button>
              <button>Instagram</button>
            </div>
          </div>
          <div className="goal">
            {/* <div className="cur_level"></div> */}
            <div className="progress">
              <CircularProgressbar
                className="cur_level"
                value={77}
                styles={buildStyles({
                  pathColor: "rgb(200, 176, 255)",
                  textColor: "white",
                })}
                text="77%"
              />
              <CircularProgressbar
                className="cur_level"
                value={77}
                styles={buildStyles({
                  pathColor: "rgb(200, 176, 255)",
                  textColor: "white",
                })}
                text="77%"
              />
            </div>
            {/* <div className="cur_per"></div> */}
            <div className="label">
              <h4>Current level</h4>
              <h4>Current Progress</h4>
            </div>
          </div>

          <div className="songs">
            <div className="topsongs"></div>
            <div className="streak"></div>
          </div>
          <button className="start">Start Work Out</button>
        </div>
      </div>
    </div>
  );
};

export default Side_menu;
