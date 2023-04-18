import React from "react";
import "./EventCards.scss";

const EventCards = ({id, name, handleClick ,desc, img}) => {
  const nameArray = name.split(" ")
  return (
    <>
      <div className="eventCard" onClick={() => {handleClick(id, desc)}} >
        <img src={`./posters/${img}.webp`} alt=""/>
        <div className="card-name" >
          <p >{name}</p>
        </div>
      </div>
    </>
  );
};



export default EventCards;
