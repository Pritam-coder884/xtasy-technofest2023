import React from "react";
import "./EventCards.scss";

const EventCards = ({id, name, handleClick ,desc}) => {
  const nameArray = name.split(" ")
  return (
    <>
      <div className="card" onClick={() => {handleClick(id, desc)}} >
        <div className="card-name">
          {nameArray.map((word)=>{
            return(
              <p>{word}</p>
            ) 
          })}
        </div>
      </div>
    </>
  );
};



export default EventCards;
