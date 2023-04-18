import React from "react";
import "./EventCards.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const EventCards = ({id, name, handleClick ,desc, img}) => {
  // const nameArray = name.split(" ")
  return (
    <>
      <div className="eventCard" onClick={() => {handleClick(id, desc)}} >
      <LazyLoadImage alt={"alt"} src={`./posters/${img}.webp`} width = "100%"/>
        <div className="card-name" >
          <p >{name}</p>
        </div>
      </div>
    </>
  );
};



export default EventCards;
