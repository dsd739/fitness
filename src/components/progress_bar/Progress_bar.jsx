import React, { useEffect } from "react";
import "./progress.scss";

export default function ProgressBar() {
  useEffect(() => {
    const avatarContainers = document.querySelectorAll(".avatar-container");

    avatarContainers.forEach((container) => {
      container.addEventListener("click", function () {
        if (!this.querySelector(".info")) {
          const infoDiv = document.createElement("div");
          infoDiv.className = "info";
          const infoInnerDiv = document.createElement("div");
          infoInnerDiv.className = "info-inner";
          infoDiv.appendChild(infoInnerDiv);
          this.appendChild(infoDiv);
        }

        const info = this.querySelector(".info");
        const inner = this.querySelector(".info-inner");
        const pClass = Array.from(this.classList).find((cls) =>
          cls.startsWith("p-")
        );
        const p = pClass ? pClass.substring(2) : "";

        inner.textContent = p + "%";
        info.classList.toggle("js-active");
      });
    });

    const avatarContainersArray = Array.from(avatarContainers);
    avatarContainersArray[avatarContainersArray.length - 1].click();
  }, []);

  return (
    <>
      <div class="avatar-container p-78">
        <img
          src="https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg"
          alt=""
          class="avatar"
        />
      </div>
    </>
  );
}

/*
<div class="set-size charts-container">
  <div class="pie-wrapper progress-30">
    <span class="label">30<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
  </div>

  <div class="pie-wrapper progress-60">
    <span class="label">60<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
  </div>

  <div class="pie-wrapper progress-90">
    <span class="label">90<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
  </div>

  <div class="pie-wrapper progress-45 style-2">
    <span class="label">45<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>

  <div class="pie-wrapper progress-75 style-2">
    <span class="label">75<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>

  <div class="pie-wrapper progress-95 style-2">
    <span class="label">95<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>
  
  <div class="pie-wrapper pie-wrapper--solid progress-65">
    <span class="label">65<span class="smaller">%</span></span>
  </div>
  
  <div class="pie-wrapper pie-wrapper--solid progress-25">
    <span class="label">25<span class="smaller">%</span></span>
  </div>
  
  <div class="pie-wrapper pie-wrapper--solid progress-88">
    <span class="label">88<span class="smaller">%</span></span>
  </div>
</div>*/
