import React from 'react';
import "./SponsorCard.scss";

const SponsorCard = (props) => {
    const {img} = props;
  return (
    <div className='sponsorCard'>
            <img
            src={img}
            alt=""
            className="cardImg"
          />
    </div>
  )
}

export default SponsorCard