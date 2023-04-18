import React,{useEffect} from 'react'
import Navbar from '../../component/navbar/Navbar'
import ProfileTop from '../../component/ProfileTop/ProfileTop'
import Footer from '../../component/Footer/Footer'
import { events } from '../../component/events'
import EventCards from '../../component/EventCards/EventCards'
import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss"
import { fetchUserEvents } from '../../Redux/customSlice'

const Profile = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        
    }
    useEffect(()=>{
        dispatch(fetchUserEvents())
      },[])
    
    return (
        <>
            <Navbar />
            <ProfileTop />
            <div className="event-cards">
                <div className="all">
                    <div className="cards">
                        {events.map((event) => {
                            return (
                                <EventCards key={event.id} id={event.id} name={event.name} desc={event.desc} handleClick={handleClick} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile