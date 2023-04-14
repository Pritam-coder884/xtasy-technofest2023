import React from "react";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <div>
      <div className="timeline">
        <div className="wholeTimeline">
          <h1>TIMELINE</h1>
          <div className="days">
            <div className="content1">
              <div className="day"></div>
              <button className="btn">DAY 1</button>
            </div>
            <div className="content2">
              <div className="day"></div>
              <button className="btn">DAY 2</button>
            </div>
            <div className="content3">
              <div className="day"></div>
              <button className="btn">DAY 3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
