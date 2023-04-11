import React from "react";
import Data_slider from "./Data_slider";
import "./slider.scss";

function Slider() {
  return (
    <div className="container-slider">
      <div className="card-slider">
      {Data_slider.map((item) => {
        return (
              <div className="card-title">
                <h4>{item.title}</h4>
              </div>
        );
      })}
      </div>
    </div>
  );
}
export default Slider;
