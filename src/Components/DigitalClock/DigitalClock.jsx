import React, { useEffect } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  useEffect(() => {
    setInterval(() => {
      const time = document.querySelector(".display #time");
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let day_night = "AM";
      if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      time.textContent =
        hours + ":" + minutes + ":" + seconds + " " + day_night;
    });
  }, []);
  return (
    <div>
      <div className="clock-container bottom-[12%] left-[30%] md:bottom-[12%] md:left-[39%] lg:bottom-[12%] lg:left-[42%] xl:bottom-[12%] xl:left-[46%]">
        <div className="wrapper">
          <div className="display">
            <div id="time"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
