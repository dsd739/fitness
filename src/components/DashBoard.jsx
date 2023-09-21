import React, { useState } from "react";
import "../Styling/DashBoard.css";
import Side_menu from "./Side_menu";
// import gsap from "gsap";
import Magnetic from "../Styling/Magnetic";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ContestCard from "./Contest_Card/C_card";
import b1 from "../Style_components/badges/1.png";
import b2 from "../Style_components/badges/2.png";
import b3 from "../Style_components/badges/3.png";
import b4 from "../Style_components/badges/4.png";
import b5 from "../Style_components/badges/5.png";
import b6 from "../Style_components/badges/6.png";
import Progressbar from "./Progressbar.jsx/Progressbar";

const DashBoard = () => {
  const [menu, setmenu] = useState(false);

  const handleMenuIn = () => {
    setmenu(!menu);
  };

  const ContestList = [
    {
      title: "30-Day Squat Challenge",
      info: "Challenge yourself with a 30-day squat challenge",
      shortDescription: "Strengthen your lower body and core in 30 days.",
    },
    {
      title: "7-Day Plank Challenge",
      info: "Strengthen your core with a 7-day plank challenge",
      shortDescription: "Build core strength in just 7 days.",
    },
    {
      title: "Cardio Blast Challenge",
      info: "Boost your cardio fitness with this challenge",
      shortDescription: "Elevate your heart rate and endurance.",
    },
    {
      title: "Yoga and Meditation Challenge",
      info: "Find balance and inner peace in a 21-day yoga and meditation challenge",
      shortDescription: "Balance mind and body in 21 days.",
    },
    {
      title: "Running Streak Challenge",
      info: "Run every day for a month with our running streak challenge",
      shortDescription: "Run daily for a month, stay motivated.",
    },
  ];

  return (
    <div className="dashboard">
      <Side_menu show={menu} click={handleMenuIn} />
      <div className="nav">
        <div className="logo">Fitify</div>
        <Magnetic>
          <div className="menu" onClick={handleMenuIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width="64px"
              height="64px"
            >
              <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z" />
            </svg>
          </div>
        </Magnetic>
      </div>

      <div className="name">
        <h1>HEY! NAME</h1>
      </div>

      <div className="main">
        <div className="first">
          <div className="sec1">
            <div className="sec1_1">
              <div className="rating">
                <CircularProgressbar
                  className="cur_rating"
                  value={100}
                  styles={buildStyles({
                    pathColor: "salmon",
                    textColor: "white",
                    trailColor: "salmon",
                  })}
                  text="Rating"
                />
              </div>
              <div className="badges" id="style-1">
                <img src={b1} alt="img" />
                <img src={b2} alt="img" />
                <img src={b3} alt="img" />
                <img src={b4} alt="img" />
                <img src={b5} alt="img" />
                <img src={b6} alt="img" />
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/29/20/26/award-1781445_1280.png"
                  alt="img"
                />
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/13/01/21/award-155595_1280.png"
                  alt="img"
                />
              </div>
              <h2>badges</h2>
            </div>
            <div className="sec1_2">
              
            </div>
          </div>
          <div className="sec2">
            <div className="undecided">
              <Progressbar />
            </div>
          </div>
        </div>

        <div className="second">
          <div className="sec1_3">
            <h2>Weekly Contest</h2>
            <div className="cont_list" id="style-15">
              {ContestList.map((Contest) => (
                <ContestCard
                  key={Contest.title}
                  title={Contest.title}
                  info={Contest.info}
                  description={Contest.shortDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
