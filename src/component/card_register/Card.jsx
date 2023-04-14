import React from 'react'
import RegImage from '../register/RegImage';

function Card(){
    return(
<div className='card-content'>
<div className='retro'>
<h3>RETRO GAZE</h3>
<span>
<h1>LIGHT CAMERA <span className='action'>ACTION</span>
</h1>
</span>
</div>
<div className='total-flex'>
<div className='text-flex'>
Get ready to join the unforgetable retro
</div>
<div className='Image-flex'>
<RegImage/>
</div>
</div>
</div>
    )    
}
export default Card;