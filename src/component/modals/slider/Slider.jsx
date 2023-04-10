
import React from 'react'
import Data_slider from './Data_slider'
import './slider.scss';

function Slider() {
    return(
<div className='container'>
        {Data_slider.map((item)=>{
         return(
          <div className='card'>
        <div className='card_slider'>
        <div className='card-title'>
        <h4>{item.title}</h4>
        </div>
        </div>
        </div>
         )
         })
        }
      </div>
         )}
export default Slider;