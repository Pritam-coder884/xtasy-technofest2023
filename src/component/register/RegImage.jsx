import React from 'react'
import './RegImage.scss'
import circle from '../../Assets/images/circle.png'
import proj from '../../Assets/images/proj.png'
import light from '../../Assets/images/light.png'

function RegImage(){
        return(
            <div className="images">
                <div className="circle">
                 <img src={circle} alt="#" className="cir"/>
                </div>
                <div className="proj">
                    <img src={proj} alt="#" className="pj" />
                </div>
                <div className="light">
                    <img src={light} alt="#" className="lt" />
                </div>
            </div>
        )
    }
    export default RegImage;
