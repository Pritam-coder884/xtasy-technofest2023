import React from 'react';
import "./SponsorCard.scss";

const SponsorCard = (props) => {
    const {img} = props;
  return (
    <div className='sponsorCard' style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            
    </div>
  )
}

export default SponsorCard