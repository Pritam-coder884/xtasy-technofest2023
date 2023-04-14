import React from 'react'
import "./Sponsors.scss";
import img1 from '../../Assets/images/appleLogo.jpg';
import SponsorCard from './SponsorCard';

const Sponsors = () => {
  const image=[img1,img1,img1,img1,img1]
  return (
    <div className='sponsors'>
        <div className='headingSponsors'> 
            <div className='colorBar'></div>
            <div className='headText'>SPONSORS OF THIS YEAR</div>
            <div className='colorBar'></div>
        </div>
        <div className='slider'>
            <div className='slide-track'>
            {
              image.map((item)=>
              <SponsorCard img={item}/>
              )
            }
            {/* // */}
            {
              image.map((item)=>
              <SponsorCard img={item}/>
              )
            }
            {/* // */}
            {
              image.map((item)=>
              <SponsorCard img={item}/>
              )
            }
            {/*  */}
            {
              image.map((item)=>
              <SponsorCard img={item}/>
              )
            }
            </div>
        </div>
    </div>
  )
}

export default Sponsors