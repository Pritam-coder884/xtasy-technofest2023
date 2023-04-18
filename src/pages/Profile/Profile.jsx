import React,{useEffect, useState} from 'react'
import Navbar from '../../component/navbar/Navbar'
import ProfileTop from '../../component/ProfileTop/ProfileTop'
import Footer from '../../component/Footer/Footer'
import { events } from '../../component/events'
import EventCards from '../../component/EventCards/EventCards'
import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss"
import { useNavigate } from 'react-router'

const Profile = () => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem("token")
    const [events , setEvents] = useState([])

    const nav = useNavigate()

    useEffect(() => {
        if(!accessToken){
            nav('/gauth')
            return
        }
    } , [])

    const handleClick = () => {

    }
    
    return (
        <>
            <Navbar />
            <ProfileTop setEvents={setEvents} />
            <div className="event-cards">
                <div className="all">
                    <div className="cards">
                        {events.map((event) => {
                            return (
                                <EventCards key={event.id} id={event.id} name={event.eventName} desc={event.eventDetails} img={event.id} handleClick={handleClick} />
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