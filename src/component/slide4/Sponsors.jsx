import React from 'react'
import "./Sponsors.scss";
import img1 from '../../Assets/images/appleLogo.jpg';
import SponsorCard from './SponsorCard';

const Sponsors = () => {

  return (
    <div className='sponsors'>
        <div className='headingSponsors'> 
            <div className='colorBar'></div>
            <div className='headText'>SPONSORS OF THIS YEAR</div>
            <div className='colorBar'></div>
        </div>
        <div className='slider'>
            <div className='slide-track'>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            {/* // */}
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            {/* // */}
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            {/*  */}
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            <SponsorCard img={img1}/>
            </div>
        </div>
    </div>
  )
}

export default Sponsors