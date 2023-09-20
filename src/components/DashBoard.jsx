import React, { useState } from "react";
import "../Styling/DashBoard.css";
import Side_menu from "./Side_menu";
// import gsap from "gsap";
import Magnetic from "../Styling/Magnetic";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const DashBoard = () => {
  const [menu, setmenu] = useState(false);

  const handleMenuIn = () => {
    setmenu(!menu);
  };


  return (
    <div className="dashboard">
      <Side_menu show={menu} click={handleMenuIn}/>
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

      <div className="sec1">

        <div className="sec1_1">
          <div className="rating">
          <CircularProgressbar className="cur_rating" value={100} styles={buildStyles({ pathColor:"salmon", textColor:"white", trailColor:"salmon"})} text='Rating'/>
          </div>
          <div className="badges">
            {/* <img src="https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2016/10/29/20/26/award-1781445_1280.png" alt="img" />
            <img src="https://cdn.pixabay.com/photo/2013/07/13/01/21/award-155595_1280.png" alt="img" /> */}
          </div>
          <h2>badges</h2>
        </div>

        <div className="sec1_2">
          <div className="jump">
            <button>Jump to next Level</button>
          </div>
          <div className="bmi">
            <img src="https://cdn-icons-png.flaticon.com/512/3373/3373123.png" alt="" />
            <div className="cur_bmi">24</div>
          </div>
        </div>

        <div className="sec1_3">
          <h2>Weekly Contest</h2>
          <div className="cont_list">
      
          </div>
        </div>
      </div>

      <div className="sec2">
        
      </div>


    </div>
  );
};

export default DashBoard;
