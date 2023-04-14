import "./regimg.scss"
import circle from "../../Assets/images/circle.png"
import proj from "../../Assets/images/projector.png"
import light from "../../Assets/images/light.png"

const RegImg=()=>{
    return(
        <div className="image">
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

export default RegImg