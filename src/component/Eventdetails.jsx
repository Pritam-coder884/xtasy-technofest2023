import React from 'react'
import "./Eventdetails.scss"
const Eventdetails = () => {
  return (
    <div className='eventContainer'>
          <div className="eventImg"></div>
          <div className='eventDetails'>
            <div className="eventHeading">
            EVENT NAME
          </div>
          <div className="details">
            <div className="time">
                <div>Date & Time</div>
                <div className='detailAns'>13th Mar 2023, 8:00 pm</div>
            </div>
            <div className="detailLink">
                <div>Game details</div>
                {/* <div><link>Link here</link></div> */}
            </div>
          </div>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate ut laudantium temporibus inventore dolores! Aliquid aperiam, esse incidunt in consectetur harum quis a quasi quas? Eos ipsum non magni laudantium inventore? Ullam, ex ducimus dolore rem aut natus fuga. At, magnam animi. Eligendi, consectetur.
          </div>
          <div className="RegisterBtn">
            Register
          </div></div>
    </div>
  )
}

export default Eventdetails